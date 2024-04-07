import React, { useRef, useState } from 'react';
import { View, TextInput, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { states, locations } from '../../store';

export default function Input({ inputRef, vw, vh, start }) {
    const inputValue = useRef('');
    const { setInputRender, search, setSearch } = states()
    const { activeInput } = locations
    return (
        <View style={{
            flex: activeInput === 2 ? 0 : 1, justifyContent: 'center', overflow: 'hidden'
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
                        autocomplete(text, setSearch);
                    }}
                    placeholder={start ? 'Your Current Location' : 'Select Your Destination Location'}
                    onBlur={() => {
                        if (!inputValue.current || !search.length) {
                            setTimeout(() => {
                                if (start && activeInput.current === 1) {
                                    handleInput(setInputRender, activeInput, 0)

                                } else if (!start && activeInput.current === 2) {
                                    handleInput(setInputRender, activeInput, 0)
                                }else if (activeInput === 0){
                                    handleInput(setInputRender, activeInput, 0)
                                }
                            }, 0)
                        }
                    }}
                    onFocus={() => handleInput(setInputRender, activeInput, start ? 1 : 2)}
                />
            </View>
            {/* {!activeInput || start && activeInput !== 1 ? null : (
                <View style={{
                    position: 'absolute', top: '80%', height: vh * (start ? 0.7 : 0.5),
                    width: '100%', backgroundColor: '#c4c4c4', bottom: '0%',
                    zIndex: 1, borderRadius: vw * 0.04,
                }}>
                    <ScrollView style={{ flexGrow: 1, flexShrink: 1 }}>

                        {search.map((e, index) => (
                            <TouchableOpacity onPress={() => setInputRender(p=>!p)} key={index} style={{
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


const handleInput = (setInputRender, activeInput, current) => {
    activeInput.current = current
    setInputRender(p => !p)
}

const autocomplete = async (input, setSearch) => {
    try {
        const encodedInput = encodeURIComponent(input);
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodedInput}&format=json&addressdetails=1&polygon_geojson=0&countrycodes=TN&viewbox=10.0718,36.6507,10.3523,36.9168&limit=3`);
        const result = response.data.map(place => ({
            name: place.display_name,
            latitude: parseFloat(place.lat),
            longitude: parseFloat(place.lon),
        }))
        setSearch(result)
    } catch (error) {
        console.error('Error fetching autocomplete results:', error);
        setSearch([]);
    }
};