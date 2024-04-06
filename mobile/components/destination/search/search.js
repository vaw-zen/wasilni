import { View } from 'react-native';
import { states } from '../../store';
import Input from './input';

export default function Search({ from, to }) {
    const { vw, vh } = states();
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
