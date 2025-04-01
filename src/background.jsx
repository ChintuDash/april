import {useEffect, useRef} from 'react'
import song from "./assets/song-2.mp3";
const Music=()=>{
    const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
        const hasPlayed = sessionStorage.getItem("audioPlayed");

        if (!hasPlayed) {
            audioRef.current.volume = 1; // Ensure volume is 100%
            audioRef.current.muted = false; // Unmute
            audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));

            // Mark audio as played
            sessionStorage.setItem("audioPlayed", "true");
        }
    }
}, []);
    return(
        <audio ref={audioRef} src={song} autoPlay loop hidden />
    );
};

export default Music;