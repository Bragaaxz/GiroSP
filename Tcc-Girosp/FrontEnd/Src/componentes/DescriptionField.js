import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/eventStyles";

export default function DescriptionField({ descricao, setDescricao }) {
  return (
    <View style={[styles.inputContainer, styles.descriptionContainer]}>
      <Feather name="edit-3" size={17} color="#888" />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descrição do evento"
        placeholderTextColor="#999"
        multiline
        textAlignVertical="top"
        value={descricao}
        onChangeText={setDescricao}
      />
    </View>
  );
}
