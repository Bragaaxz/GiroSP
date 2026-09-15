import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/eventStyles";

export default function Decorations() {
  return (
    <>
      <View style={styles.orangeDecoration}>
        <Text style={styles.orangeText}>〽</Text>
      </View>

      <View style={styles.greenDecoration}>
        <Text style={styles.greenText}>〰</Text>
      </View>

      <View style={styles.smallDecoration}>
        <Text>⌁</Text>
      </View>
    </>
  );
}
