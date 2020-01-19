import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
navigator.geolocation = require('@react-native-community/geolocation');

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})

function Main() {

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await navigator.geolocation.requestAuthorization();

      if (granted) {
        navigator.geolocation.getCurrentPosition(info => console.log(info));
      
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView
      initialRegion={currentRegion}
      style={styles.map}
    />
  );
}

export default Main;