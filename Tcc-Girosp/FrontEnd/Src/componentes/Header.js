import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/eventStyles";

export default function Header({ onClose, title }) {
  return (
    <View>
      <View style={styles.headerActions}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          accessibilityLabel="Voltar ou descartar evento"
        >
          <Ionicons name="close" size={25} color="#111" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
