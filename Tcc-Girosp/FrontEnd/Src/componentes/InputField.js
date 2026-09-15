import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "../styles/eventStyles";

export default function InputField({
  icon,
  placeholder,
  value,
  onChangeText,
}) {
  const isFeather = icon === "edit-3";

  return (
    <View style={styles.inputContainer}>
      {isFeather ? (
        <Feather name={icon} size={17} color="#888" />
      ) : (
        <Ionicons name={icon} size={19} color="#888" />
      )}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
