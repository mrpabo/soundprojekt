import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const audioClips = [
    {
        keyCode: 97,
        keyTrigger: "1",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ,

    },
    {
        keyCode: 98,
        keyTrigger: "2",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",

    },
    {
        keyCode: 99,
        keyTrigger: "3",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",

    },
    {
        keyCode: 100,
        keyTrigger: "4",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",

    },
    {
        keyCode: 101,
        keyTrigger: "5",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",

    },
    {
        keyCode: 102,
        keyTrigger: "6",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",

    },
    {
        keyCode: 103,
        keyTrigger: "7",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",

    }, {
        keyCode: 104,
        keyTrigger: "8",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",

    },
    {
        keyCode: 105,
        keyTrigger: "9",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",

    },
]





function DrumMachine() {

    const [volume, setVolume] = React.useState(1);
    const [recording, setRecording] = React.useState("");
    const [speed, setSpeed] = React.useState(0.5);



    const playRecording = () => {
        let index = 0;
        let recordArray = recording.split("");

        const interval = setInterval(() => {
            const audioTag = new Audio(audioClips.find(clip => clip.keyTrigger === recordArray[index]).url);
            audioTag.volume = volume;
            audioTag.currentTime = 0;
            audioTag.play();
            index++;
        }, speed * 600);

        setTimeout(
            () => clearInterval(interval),
            600 * speed * recordArray.length - 1
        );
    };
    return (
        <div className="drumMachine">
            <h2>DrumMachine</h2>
            {audioClips.map(clip => (
                <Pad key={clip.id}
                    clip={clip}
                    volume={volume}
                    setRecording={setRecording} />
            ))}
            <br />
            <h4>Volume</h4>
            <input type="range"
                step="0.01"
                onChange={(e) => setVolume(e.target.value)}
                value={volume}
                max="1"
                min="0"
                className='w-50'
            />

            <h3>{recording}</h3>
            {recording && (
                <>
                    <button onClick={playRecording}
                        className="btn btn-success">play</button>

                    <button onClick={() => setRecording("")}
                        className="btn btn-danger">clear</button>
                    <br />
                    <h4>Speed</h4>
                    <input type="range"
                        step="0.01"
                        onChange={(e) => setSpeed(e.target.value)}
                        value={speed}
                        max="1.2"
                        min="0.1"
                        className='w-50'
                    />
                </>
            )}
        </div>
    )
}


function Pad({ clip, volume, setRecording }) {

    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.keyCode === clip.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = new Audio(clip.url);
        setActive(true)
        setTimeout(() => setActive(false), 200);
        audioTag.volume = volume;
        audioTag.currentTime = 0;
        audioTag.play();
        setRecording((prev) => prev + clip.keyTrigger);
    };

    return (
        <div onClick={playSound}
            className={`btn btn-secondary p-4 m-3 ${active && "btn-warning"}`}
        >
            <audio className="clip" id={clip.keyTrigger} src={clip.url} />
            {clip.keyTrigger}
        </div >
    );

}

export default DrumMachine