// ORSMap.js
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

const ORSMap = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  const calculateRoute = async () => {
    if (origin && destination) {
      try {
        const apiKey = '5b3ce3597851110001cf62480feb1c0e25a64aaaba9799d6f5b6b28b'; // Provided API key
        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origin.longitude},${origin.latitude}&end=${destination.longitude},${destination.latitude}`
        );

        const { features } = response.data;

        if (features.length > 0) {
          const coordinates = features[0].geometry.coordinates.map(
            (coordinate) => ({
              latitude: coordinate[1],
              longitude: coordinate[0],
            })
          );
          setRouteCoordinates(coordinates);
        }
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    }
  };

  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.765373,
          longitude: 10.193074,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(event) => {
          const { coordinate } = event.nativeEvent;
          if (!origin) {
            setOrigin(coordinate);
          } else if (!destination) {
            setDestination(coordinate);
          }
        }}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
      </MapView>

      {/* <View style={{ position: 'absolute', top: '70.5%', width: '100%' }}>
        <Button
          title="Calculate Route"
          onPress={calculateRoute}
          disabled={!origin || !destination}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ORSMap;
