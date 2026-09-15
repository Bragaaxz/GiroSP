import React, { useEffect, useState } from "react";
import { ScrollView, Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../componentes/Header";
import PhotoUpload from "../componentes/PhotoUpload";
import InputField from "../componentes/InputField";
import DateTimeFields from "../componentes/DateTimeFields";
import CategoryField from "../componentes/CategoryField";
import DescriptionField from "../componentes/DescriptionField";
import PublishButton from "../componentes/PublishButton";
import Decorations from "../componentes/Decorations";


import styles from "../styles/eventStyles";

const EVENTOS_CHAVE = "@criar_evento:eventos";

export default function CriarEventoScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [mensagem, setMensagem] = useState(null);
  const [eventoEnviado, setEventoEnviado] = useState(false);

  useEffect(() => {
    async function carregarEventos() {
      try {
        const eventosSalvos = await AsyncStorage.getItem(EVENTOS_CHAVE);
        if (eventosSalvos) setEventos(JSON.parse(eventosSalvos));
      } catch {
        Alert.alert("Erro", "Não foi possível carregar os eventos salvos.");
      }
    }

    carregarEventos();
  }, []);

  async function salvarEventos(novosEventos) {
    setEventos(novosEventos);
    await AsyncStorage.setItem(EVENTOS_CHAVE, JSON.stringify(novosEventos));
  }

  function limparFormulario() {
    setNome("");
    setData("");
    setHorario("");
    setLocal("");
    setCategoria("");
    setDescricao("");
    setFoto(null);
  }

  function confirmarSaida() {
    Alert.alert("Descartar evento?", "Os dados preenchidos serão apagados.", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Descartar",
        style: "destructive",
        onPress: () => {
          limparFormulario();
          if (navigation?.goBack) navigation.goBack();
        },
      },
    ]);
  }

  async function publicarEvento() {
    setMensagem(null);
    if (!nome || !data || !horario || !local || !categoria) {
      setMensagem({ tipo: "erro", texto: "Preencha nome, data, horário, local e categoria." });
      Alert.alert(
        "Campos obrigatórios",
        "Preencha nome, data, horário, local e categoria."
      );
      return;
    }

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
      setMensagem({ tipo: "erro", texto: "Data inválida. Use o formato DD/MM/AAAA." });
      Alert.alert("Data inválida", "Use o formato DD/MM/AAAA.");
      return;
    }

    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(horario)) {
      setMensagem({ tipo: "erro", texto: "Horário inválido. Use o formato HH:MM." });
      Alert.alert("Horário inválido", "Use o formato HH:MM.");
      return;
    }

    const novoEvento = {
      id: String(Date.now()),
      nome,
      data,
      horario,
      local,
      categoria,
      descricao,
      foto,
    };

    try {
      await salvarEventos([novoEvento, ...eventos]);
      limparFormulario();
      setMensagem({ tipo: "sucesso", texto: `Evento "${nome}" publicado e salvo com sucesso.` });
      setEventoEnviado(true);
      Alert.alert("Evento publicado!", `O evento "${nome}" foi salvo em Eventos publicados.`);
    } catch {
      Alert.alert("Erro ao salvar", "Não foi possível salvar o evento no aparelho.");
    }
  }

  async function excluirEvento(id) {
    const novosEventos = eventos.filter((evento) => evento.id !== id);
    try {
      await salvarEventos(novosEventos);
    } catch {
      Alert.alert("Erro ao excluir", "Não foi possível atualizar os eventos salvos.");
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header
          onClose={confirmarSaida}
          title="Criar evento"
        />

        {eventoEnviado ? (
          <View style={styles.sentEvent}>
            <Text style={styles.sentEventTitle}>Evento enviado</Text>
            <Text style={styles.sentEventText}>
              As informações foram salvas no cache local deste site.
            </Text>
            <TouchableOpacity
              style={styles.savedEventsButton}
              onPress={() => { setEventoEnviado(false); setMensagem(null); }}
            >
              <Text style={styles.savedEventsButtonText}> voltar à tela inicial </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
        {mensagem && (
          <View style={[styles.feedback, mensagem.tipo === "sucesso" ? styles.feedbackSuccess : styles.feedbackError]}>
            <Text style={styles.feedbackText}>{mensagem.texto}</Text>
          </View>
        )}
        <PhotoUpload foto={foto} setFoto={setFoto} />

        <InputField
          icon="edit-3"
          placeholder="Nome do evento"
          value={nome}
          onChangeText={setNome}
        />

        <DateTimeFields
          data={data}
          setData={setData}
          horario={horario}
          setHorario={setHorario}
        />

        <InputField
          icon="location-outline"
          placeholder="Local"
          value={local}
          onChangeText={setLocal}
        />

        <CategoryField
          categoria={categoria}
          setCategoria={setCategoria}
        />

        <DescriptionField
          descricao={descricao}
          setDescricao={setDescricao}
        />

        <PublishButton onPress={publicarEvento} />
          </>
        )}
        <Decorations />
      </ScrollView>
    </SafeAreaView>
  );
}
