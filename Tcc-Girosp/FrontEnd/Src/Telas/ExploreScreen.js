
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderExplore from '../componentes/HeaderExplore';
import CategoryFilter from '../componentes/CategoryFilter';
import MapExplore from '../componentes/MapExplore';
import BottomNavigation from '../componentes/BottomNavigation';

export default function ExploreScreen({ navigation }) {
  const [category, setCategory] = useState('Todos');
  const [page, setPage] = useState('Explorar');

  const events = [
    {
      id: 1,
      title: 'Feira das Minas',
      date: '24 MAI · 14H',
      location: 'Memorial da América Latina',
      distance: '1,8 km de você',
      category: 'Cultura',
      latitude: -23.5255,
      longitude: -46.6656,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500'
    },
    {
      id: 2,
      title: 'Festival de Música',
      date: '25 MAI · 18H',
      location: 'Vila Madalena',
      distance: '3,2 km de você',
      category: 'Música',
      latitude: -23.5462,
      longitude: -46.6914,
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500'
    },
    {
      id: 3,
      title: 'Arte na Cidade',
      date: '26 MAI · 10H',
      location: 'Pinheiros',
      distance: '4,1 km de você',
      category: 'Arte',
      latitude: -23.5629,
      longitude: -46.6829,
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500'
    }
  ];

  const filteredEvents =
    category === 'Todos'
      ? events
      : events.filter(event => event.category === category);

  function handleNavigation(name) {
    setPage(name);
    if (name !== 'Explorar') {
      Alert.alert(name, `A seção "${name}" foi selecionada.`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HeaderExplore />

        <CategoryFilter
          selected={category}
          onSelect={setCategory}
        />

        <View style={styles.mapContainer}>
          <MapExplore events={filteredEvents} />
        </View>
      </View>

      <BottomNavigation
        selected={page}
        onSelect={handleNavigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
    position: 'relative'
  }
});
