import React from "react";
import { Alert, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import styles from "../styles/eventStyles";

export default function PhotoUpload({ foto, setFoto }) {
  async function escolherFoto() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita o acesso à galeria para escolher a foto do evento."
      );
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.8,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  return (
    <TouchableOpacity
      style={styles.photoBox}
      onPress={escolherFoto}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={foto ? "Alterar foto do evento" : "Adicionar foto do evento"}
    >
      {foto ? (
        <>
          <Image source={{ uri: foto }} style={styles.photoPreview} />
          <TouchableOpacity
            style={styles.removePhotoButton}
            onPress={() => setFoto(null)}
            accessibilityRole="button"
            accessibilityLabel="Remover foto"
          >
            <Ionicons name="close" size={16} color="#fff" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Ionicons name="camera-outline" size={27} color="#999" />
          <Text style={styles.photoText}>
            Adicionar foto{"\n"}do evento
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
