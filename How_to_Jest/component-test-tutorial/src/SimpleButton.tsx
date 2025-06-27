import { useState } from "react";

export const SimpleButton = () => {
    const [state, setState] = useState(false);
    const hadleClick = () => {
        setState((prevState) => !prevState);
    };
    return <button onClick={hadleClick}>{state ? "ON":"OFF"}</button>
}
