import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';

export default function Input({ inputRef, vw, vh, start }) {
    const [active, setActive] = useState(false)
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
                    onChangeText={text => console.log(text)}
                    placeholder={start ? 'Your Current Location' : 'Select Your Destination Location'}
                    onBlur={() => setActive(false)}
                    onFocus={() => setActive(true)}
                                    />
            </View>
            {active && (
                <View style={{
                    position: 'absolute', top: '80%', height: vh * 0.5,
                    width: '100%', backgroundColor: 'red', bottom: '0%',
                    zIndex: 1,
                }}>
                    <ScrollView style={{ flexGrow: 1, flexShrink: 1 }}>

                        {Array.from({ length: 8 }).map((_, index) => (
                            <View key={index} style={{
                                width: '100%', height: vh * 0.12,
                                backgroundColor: 'green', borderBottomWidth: 1, borderBottomColor: 'red'
                            }}>

                            </View>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    )
}
