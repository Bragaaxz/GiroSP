import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/eventStyles";

export default function PublishButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.publishButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.publishText}>Publicar evento</Text>
    </TouchableOpacity>
  );
}
