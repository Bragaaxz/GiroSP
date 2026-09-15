import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { name: 'Todos', icon: 'grid-outline', color: '#111' },
  { name: 'Música', icon: 'musical-notes-outline', color: '#8B32FF' },
  { name: 'Cultura', icon: 'globe-outline', color: '#FF6422' },
  { name: 'Arte', icon: 'color-palette-outline', color: '#24B866' },
  { name: 'Esporte', icon: 'football-outline', color: '#1688FF' },
  { name: 'Outros', icon: 'apps-outline', color: '#555' }
];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {categories.map(category => {
          const active = selected === category.name;

          return (
            <TouchableOpacity
              key={category.name}
              style={styles.category}
              onPress={() => onSelect(category.name)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  active && styles.activeIconContainer
                ]}
              >
                <Ionicons
                  name={category.icon}
                  size={21}
                  color={active ? '#fff' : category.color}
                />
              </View>

              <Text style={[styles.text, active && styles.activeText]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 74,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 14,
    alignItems: 'center'
  },
  category: {
    width: 63,
    alignItems: 'center',
    marginHorizontal: 2
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#eee'
  },
  activeIconContainer: {
    backgroundColor: '#111',
    borderColor: '#111'
  },
  text: {
    fontSize: 10,
    marginTop: 5,
    color: '#333'
  },
  activeText: {
    fontWeight: '700',
    color: '#111'
  }
});
