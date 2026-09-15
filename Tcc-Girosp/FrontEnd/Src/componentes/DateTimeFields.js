import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/eventStyles";

export default function DateTimeFields({
  data,
  setData,
  horario,
  setHorario,
}) {
  return (
    <View style={styles.row}>
      <View style={[styles.inputContainer, styles.halfInput]}>
        <Ionicons name="calendar-outline" size={18} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Data"
          placeholderTextColor="#999"
          value={data}
          onChangeText={setData}
          keyboardType="number-pad"
          maxLength={10}
        />
      </View>

      <View style={[styles.inputContainer, styles.halfInput]}>
        <Ionicons name="time-outline" size={18} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Horário"
          placeholderTextColor="#999"
          value={horario}
          onChangeText={setHorario}
          keyboardType="number-pad"
          maxLength={5}
        />
      </View>
    </View>
  );
}
