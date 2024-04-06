import { View, Text, Pressable } from "react-native";
import { states } from "../store";
import Header from "./header/header";
import React, { useRef } from 'react';
import Search from "./search/search";

export default function Destination() {
    const { vw, vh } = states()
    const from = useRef();
    const to = useRef();
    return (
        <>
            <Pressable onPressIn={() => {
                if (from.current.isFocused()) {
                    from.current.blur();
                }
                if (to.current.isFocused()) {
                    to.current.blur()
                }
            }} style={{
                position: 'absolute', width: '100%', height: '100%', backgroundColor: '#f8f8f8', display: 'flex',
                paddingHorizontal: '4%',
                paddingVertical: '10%', pointerEvents: 'none'
            }}>
                <View style={{ flex: 1, overflow: 'hidden', borderRadius: vw * 0.04 }}>

                </View>
            </Pressable>
            <Pressable onPressIn={() => {
                if (from.current.isFocused()) {
                    from.current.blur();
                }
                if (to.current.isFocused()) {
                    to.current.blur()
                }
            }} style={{ position: 'absolute', width: '100%', height: '58%', top: '5%', paddingHorizontal: '4%' }}>
                <Header />
                <Search from={from} to={to} />
                <View style={{ width: '100%', height: '15%', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: vw * 0.05 }}>Stations Near You</Text>
                </View>
            </Pressable>
        </>
    )
}
