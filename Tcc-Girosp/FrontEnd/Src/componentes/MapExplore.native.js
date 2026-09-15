import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const markerColors = {
  Música: '#8B32FF',
  Cultura: '#FF6422',
  Arte: '#24B866',
  Esporte: '#1688FF',
  Outros: '#111'
};

export default function MapExplore({ events, onEventPress }) {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestLocation();
  }, []);

  async function requestLocation() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      const current = await Location.getCurrentPositionAsync({});
      setLocation(current.coords);
    } catch (error) {
      console.log('Erro ao obter localização:', error);
    }
  }

  async function goToUser() {
    if (!location) {
      Alert.alert(
        'Localização',
        'Permita o acesso à localização para centralizar o mapa em você.'
      );
      await requestLocation();
      return;
    }

    mapRef.current?.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
    }, 700);
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: -23.5489,
          longitude: -46.6388,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
        showsCompass={false}
        toolbarEnabled={false}
      >
        {events.map(event => (
          <Marker
            key={event.id}
            coordinate={{
              latitude: event.latitude,
              longitude: event.longitude
            }}
            onPress={() => onEventPress?.(event)}
          >
            <View
              style={[
                styles.marker,
                {
                  backgroundColor:
                    markerColors[event.category] || '#111'
                }
              ]}
            >
              <Ionicons name="location" size={18} color="#fff" />
            </View>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={styles.locationButton}
        onPress={goToUser}
        activeOpacity={0.8}
      >
        <Ionicons name="locate" size={23} color="#111" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  locationButton: {
    position: 'absolute',
    right: 18,
    bottom: 125,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
  },
  marker: {
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff'
  }
});
