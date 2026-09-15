import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderExplore() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={21} color="#777" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholder="Buscar eventos, lugares, artistas..."
          placeholderTextColor="#999"
        />
        {search.length > 0 && (
          <Ionicons name="close-circle" size={19} color="#aaa" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#151515',
    marginBottom: 14
  },
  searchContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  input: {
    flex: 1,
    marginHorizontal: 9,
    fontSize: 13,
    color: '#333'
  }
});
