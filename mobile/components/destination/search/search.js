import { View } from 'react-native';
import Input from './input';
import { locations, states } from '../../store';

export default function Search() {
    const { vw, vh, } = states();
        const { from, to } =   locations
    return (
        <View
            style={{ zIndex: 1, width: '100%', height: '52%', backgroundColor: 'white', borderRadius: vw * 0.04, padding: '7.5%' }}
        >
            <View style={{ flex: 1 }}>
                <Input inputRef={from} vw={vw} vh={vh} start={true} />
                <Input inputRef={to} vw={vw} vh={vh} />
            </View>
        </View>
    );
}
