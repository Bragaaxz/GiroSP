import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const items = [
  { name: 'Início', icon: 'home-outline', active: 'home' },
  { name: 'Explorar', icon: 'search-outline', active: 'search' },
  { name: 'Criar', icon: 'add' },
  { name: 'Salvos', icon: 'bookmark-outline', active: 'bookmark' },
  { name: 'Perfil', icon: 'person-outline', active: 'person' }
];

export default function BottomNavigation({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      {items.map(item => {
        const active = selected === item.name;

        if (item.name === 'Criar') {
          return (
            <TouchableOpacity
              key={item.name}
              style={styles.item}
              onPress={() => onSelect(item.name)}
              activeOpacity={0.8}
            >
              <View style={styles.createButton}>
                <Ionicons name="add" size={29} color="#fff" />
              </View>
              <Text style={styles.text}>Criar</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() => onSelect(item.name)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={active ? item.active : item.icon}
              size={23}
              color={active ? '#111' : '#777'}
            />

            <Text style={[styles.text, active && styles.activeText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 76,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 9,
    marginTop: 5,
    color: '#777'
  },
  activeText: {
    color: '#111',
    fontWeight: '700'
  },
  createButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2
  }
});
