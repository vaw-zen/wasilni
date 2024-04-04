import { createRef } from "react";

const dimensions_refs = () => {
    const vw = createRef();
    const vh = createRef();
    return { vw: vw.current, vh: vh.current };
};
export const dimensions = dimensions_refs();