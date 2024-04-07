import { createRef } from "react";
import { create } from 'zustand';

const updateState = (set, stateKey, value) => {
    set((state) => ({
        [stateKey]: typeof value === 'function' ? value(state[stateKey]) : value,
    }));
};

const locations_refs = () => {
    const from = createRef();
    const to = createRef();
    const activeInput = createRef()
    return { from, to, activeInput };
};
export const locations = locations_refs();


export const states = create((set) => ({
    view: 0,
    setView: (v) => updateState(set, 'view', v),
    vw: 0,
    setVW: (v) => updateState(set, 'vw', v),
    vh: 0,
    setVH: (v) => updateState(set, 'vh', v),
    inputRerender: false,
    setInputRender: (v) => updateState(set, 'inputRerender', v),
    search: 0,
    setSearch: (v) => updateState(set, 'search', v),
}));

