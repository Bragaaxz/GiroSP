import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function EventCard({ event, onPress }) {
  if (!event) return null;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {event.title}
          </Text>

          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>AO VIVO</Text>
          </View>
        </View>

        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.location} numberOfLines={1}>
          {event.location}
        </Text>
        <Text style={styles.distance}>{event.distance}</Text>
      </View>

      <Image source={{ uri: event.image }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 84,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    flexDirection: 'row',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  info: {
    flex: 1,
    paddingHorizontal: 3,
    justifyContent: 'center'
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    color: '#222'
  },
  liveBadge: {
    backgroundColor: '#20A85A',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    marginLeft: 7
  },
  liveText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '800'
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '700',
    color: '#333'
  },
  location: {
    marginTop: 5,
    fontSize: 11,
    color: '#555'
  },
  distance: {
    marginTop: 5,
    fontSize: 11,
    color: '#6636F3',
    fontWeight: '600'
  },
  image: {
    width: 72,
    height: 80,
    borderRadius: 10,
    marginLeft: 8
  }
});
