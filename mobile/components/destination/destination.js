import { View, Text } from "react-native";
import { states } from "../store";

export default function Destination() {
    const { vw, vh } = states()
    return (
        <>
            <View style={{
                position: 'absolute', width: '100%', height: '100%', backgroundColor: '#f8f8f8', display: 'flex',
                paddingHorizontal: '4%',
                paddingVertical: '10%', pointerEvents: 'none'
            }}>
                <View style={{ flex: 1, backgroundColor: 'green', overflow: 'hidden', borderRadius: vw * 0.04 }}>

                </View>
            </View>
            <View style={{ position: 'absolute', width: '100%', height: '50%', backgroundColor: 'brown', top: '5%', opacity: 0.5, paddingHorizontal: '4%' }}>
                <View style={{ width: '100%', height: '18%', backgroundColor: 'blue', borderTopLeftRadius: vw * 0.04, borderTopRightRadius: vw * 0.04, overflow: 'hidden' }}>
                    <View style={{ height: '70%', width: '100%', backgroundColor: 'red', display: 'flex', flexDirection: 'row', overflow: 'hidden', alignItems: 'center' }}>
                        <View style={{ height: vh * 0.063, width: vh * 0.063, backgroundColor: '#efefef', borderRadius: vw * 0.04 }}>

                        </View>
                        <View style={{ flex: 1, paddingHorizontal: '5%' }}>
                            <Text style={{ color: '#efefef', fontSize: vw * 0.03, fontFamily: 'Montserrat', }}>Hey Med D Bouthouri</Text>
                            <Text style={{ fontFamily: 'Montserrat', fontWeight: 600 }}>Hey Med D Bouthouri</Text>
                        </View>
                        <View style={{ width: vh * 0.063 }}>

                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: '64%', backgroundColor: 'yellow' }}>

                </View>
                <View style={{ width: '100%', height: '18%', backgroundColor: 'blue' }}>

                </View>
            </View>
        </>
    )
}
