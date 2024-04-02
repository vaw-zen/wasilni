import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const autocomplete = async (input) => {
    try {
        const encodedInput = encodeURIComponent(input);
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodedInput}&format=json&addressdetails=1&polygon_geojson=0&countrycodes=TN&viewbox=10.0718,36.6507,10.3523,36.9168&limit=3`);
            return response.data.map(place => ({
            name: place.display_name,
            latitude: parseFloat(place.lat),
            longitude: parseFloat(place.lon),
        }));
    } catch (error) {
        console.error('Error fetching autocomplete results:', error);
        return [];
    }
};
const AutocompleteComponent = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = async (text) => {
    setInput(text);
    if (text.length > 3) {
      const autocompleteResults = await autocomplete(text);
      console.log(autocompleteResults);
      setResults(autocompleteResults);
    } else {
      setResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a place"
        value={input}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AutocompleteComponent;
