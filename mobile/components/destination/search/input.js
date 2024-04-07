import React, { useRef, useState } from 'react';
import { View, TextInput, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { states } from '../../store';

export default function Input({ inputRef, vw, vh, start }) {
    const [locations, setLocations] = useState([])
    const inputValue = useRef('');
    const { activeInput, setActiveInput } = states()
    console.log(activeInput)
    return (
        <View style={{
            flex: 1, justifyContent: 'center',
        }}>
            <Text style={{ fontSize: vw * 0.03, fontWeight: 'bold', color: '#c4c4c4' }}>
                {start ? 'Starting location' : 'Destination Location'}
            </Text>
            <View style={{ zIndex: -1, position: 'relative', }}>
                <TextInput
                    ref={inputRef}
                    style={{ height: 40, borderColor: 'gray', fontWeight: 'bold', height: vw * 0.11 }}
                    onChangeText={text => {
                        inputValue.current = text;
                        autocomplete(text, setLocations);
                    }}
                    placeholder={start ? 'Your Current Location' : 'Select Your Destination Location'}
                    onBlur={() => {
                        if (!inputValue.current || !locations.length) {
                            setActiveInput(previous => {
                                setTimeout(() => {
                                    if (start && previous !== 1) {
                                        return previous
                                    } else {
                                        return 0
                                    }

                                }, 500)
                                return previous
                            })
                        }
                    }}
                    onFocus={() => setActiveInput(start ? 1 : 2)}
                />
            </View>
            {/* {!activeInput || start && activeInput !== 1 ? null : (
                <View style={{
                    position: 'absolute', top: '80%', height: vh * (start ? 0.7 : 0.5),
                    width: '100%', backgroundColor: '#c4c4c4', bottom: '0%',
                    zIndex: 1, borderRadius: vw * 0.04,
                }}>
                    <ScrollView style={{ flexGrow: 1, flexShrink: 1 }}>

                        {locations.map((e, index) => (
                            <TouchableOpacity onPress={() => setActiveInput(0)} key={index} style={{
                                width: '100%', height: vh * 0.12,
                                borderBottomWidth: 1, borderBottomColor: '#c4c4c4', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: vw * 0.05 }}>{e.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )} */}
        </View>
    )
}




const autocomplete = async (input, setLocations) => {
    try {
        const encodedInput = encodeURIComponent(input);
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodedInput}&format=json&addressdetails=1&polygon_geojson=0&countrycodes=TN&viewbox=10.0718,36.6507,10.3523,36.9168&limit=3`);
        const result = response.data.map(place => ({
            name: place.display_name,
            latitude: parseFloat(place.lat),
            longitude: parseFloat(place.lon),
        }))
        setLocations(result)
    } catch (error) {
        console.error('Error fetching autocomplete results:', error);
        setLocations([]);
    }
};