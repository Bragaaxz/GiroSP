import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Ionicons } from '@expo/vector-icons';

const markerColors = {
  Música: '#8B32FF',
  Cultura: '#FF6422',
  Arte: '#24B866',
  Esporte: '#1688FF',
  Outros: '#111'
};

function Recenter({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.latitude, location.longitude], 14);
    }
  }, [location, map]);

  return null;
}

function createIcon(color) {
  return L.divIcon({
    className: 'custom-event-marker',
    html: `<div style="
      width:35px;height:35px;border-radius:50%;
      background:${color};border:2px solid white;
      display:flex;align-items:center;justify-content:center;
      color:white;font-size:18px;box-shadow:0 2px 7px rgba(0,0,0,.25);
    ">●</div>`,
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
  });
}

export default function MapExplore({ events }) {
  const center = [-23.5489, -46.6388];
  const saoPauloBounds = [
    [-23.75, -46.83],
    [-23.35, -46.35]
  ];

  return (
    <View style={styles.container}>
      <MapContainer
        center={center}
        zoom={13}
        minZoom={11}
        maxBounds={saoPauloBounds}
        maxBoundsViscosity={1}
        style={styles.map}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.map(event => (
          <Marker
            key={event.id}
            position={[event.latitude, event.longitude]}
            icon={createIcon(markerColors[event.category] || '#111')}
          >
            <Popup>
              <strong>{event.title}</strong><br />
              {event.location}<br />
              {event.date}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300
  },
  map: {
    width: '100%',
    height: '100%',
    minHeight: 300
  }
});
