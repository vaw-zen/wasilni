import axios from 'axios';

export const autocomplete = async (input) => {
  try {
    const encodedInput = encodeURIComponent(input);
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodedInput}&format=json&addressdetails=1&polygon_geojson=0&countrycodes=TN&viewbox=10.0718,36.6507,10.3523,36.9168&limit=3`);
    console.log(response.data.map(place => ({
      name: place.display_name,
      latitude: parseFloat(place.lat),
      longitude: parseFloat(place.lon),
    })));
  } catch (error) {
    console.error('Error fetching autocomplete results:', error);
    return [];
  }
};
