import { createRef } from "react";
import { create } from 'zustand';

const updateState = (set, stateKey, value) => {
    set((state) => ({
        [stateKey]: typeof value === 'function' ? value(state[stateKey]) : value,
    }));
};

const dimensions_refs = () => {
    const vw = createRef();
    const vh = createRef();
    return { vw: vw.current, vh: vh.current };
};
export const dimensions = dimensions_refs();


export const states = create((set) => ({
    view: 0,
    setView: (v) => updateState(set, 'view', v),
    vw: 0,
    setVW: (v) => updateState(set, 'vw', v),
    vh: 0,
    setVH: (v) => updateState(set, 'vh', v),
}));