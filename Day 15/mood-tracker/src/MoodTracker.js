import { useState } from "react";

export default function MoodTracker() {

    const [mood, setMood] = useState("😊");

    const moodDetails = {
        "😂": {description: 'Very Happy',link:'',memory:'When I Got My Jeep'},
        "😒": {description: 'Unamused',link:'',memory:'When Getting On My Nerves'},
        "😢": {description: 'Sad',link:'https://youtu.be/9bFHsd3o1w0?si=auyizKCtYXUDiw14',memory:'When I lost Puggles'},
        "😡": {description: 'Angry',link:'https://youtu.be/tw429JGL5zo?si=pnaX0cu8NvLcbk7Y',memory:'Almost Getting Hit By A Car'},
        "😴": {description: 'Sleepy',link:'https://www.youtube.com/live/LFASWuckB1c?si=gN_LTVDoS4Z8Np0-',memory:'Everyday Since Turning 21'},
        "🤔": {description: 'Confused',link:'https://youtu.be/n9FJkRk28bM?si=8gawKP1LhEYUpwRZ',memory:'School Work'},
        "🤩": {description: 'Excited',link:'',memory:'When I Got My Driver License'},
        "💕": {description: 'Love',link:'',memory:'People And Things Close To Me'}
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <>
            <p>{moodDetails[mood]?.description}</p>
            <a href={moodDetails[mood]?.link}>Listen to a song</a>
            <p>{moodDetails[mood]?.memory}</p>
            </>
            <button onClick={() => setMood("😂")} style={{margin: "5px",padding: "10px",background: "lightgreen"}}>Very Happy</button>
            <button onClick={() => setMood("😒")} style={{margin: "5px",padding: "10px",background: "lightblue"}}>Unamused</button>
            <button onClick={() => setMood("😢")} style={{margin: "5px",padding: "10px",background: "lightcoral"}}>Sad</button>
            <button onClick={() => setMood("😡")} style={{margin: "5px",padding: "10px",background: "lightpink"}}>Angry</button>
            <button onClick={() => setMood("😴")} style={{margin: "5px",padding: "10px",background: "lightgrey"}}>Sleepy</button>
            <button onClick={() => setMood("🤔")} style={{margin: "5px",padding: "10px",background: "lightyellow"}}>Confused</button>
            <button onClick={() => setMood("🤩")} style={{margin: "5px",padding: "10px",background: "lightcyan"}}>Excited</button>
            <button onClick={() => setMood("💕")} style={{margin: "5px",padding: "10px",background: "lightgreen"}}>Love</button>
        </div>
    )
}