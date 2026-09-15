import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/eventStyles";

const CATEGORIAS = ["Arte e cultura", "Esporte", "Gastronomia", "Música", "Tecnologia", "Outro"];

export default function CategoryField({ categoria, setCategoria }) {
  const [visivel, setVisivel] = useState(false);

  function selecionarCategoria(valor) {
    setCategoria(valor);
    setVisivel(false);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setVisivel(true)}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Selecionar categoria"
      >
        <Ionicons name="briefcase-outline" size={18} color="#888" />
        <Text style={[styles.input, styles.categoryText, !categoria && styles.placeholderText]}>
          {categoria || "Categoria"}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#777" />
      </TouchableOpacity>

      <Modal transparent visible={visivel} animationType="fade" onRequestClose={() => setVisivel(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setVisivel(false)}>
          <Pressable style={styles.categoryModal} onPress={(event) => event.stopPropagation()}>
            <Text style={styles.modalTitle}>Escolha uma categoria</Text>
            {CATEGORIAS.map((item) => (
              <TouchableOpacity key={item} style={styles.categoryOption} onPress={() => selecionarCategoria(item)}>
                <Text style={styles.categoryOptionText}>{item}</Text>
                {categoria === item && <Ionicons name="checkmark" size={20} color="#20ad68" />}
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
