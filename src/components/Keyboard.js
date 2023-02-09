
import React, { useContext, useEffect } from 'react'
import { CTX } from '../context/Store'
import QwertyHankock from "qwerty-hancock";

const Keyboard = () => {
    const [appState, updateState] = useContext(CTX);

    useEffect(() => {
        const keyboard = new QwertyHankock({
            id: "keyboard",
            width: "500",
            height: "70",
            octaves: 2,
            startNote: "C4",
            whiteKeyColor: "rgb(28,198,186)",
            blackKeyColor: "rgb(10,70,67)",
            activeColor: "rgb(166,49,172)",
            bordercolor: "white"


        });
        keyboard.keyDown = (note, freq) => {
            updateState({ type: "MAKE_OSC", payload: { note, freq } })
        };
        keyboard.keyUp = (note, freq) => {
            updateState({ type: "KILL_OSC", payload: { note, freq } })
        };

    }, [])



    return (
        <div className='keyboard'>
            <div id="keyboard"></div>
        </div>
    )
}

export default Keyboard