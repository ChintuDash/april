
import { ImCancelCircle } from "react-icons/im";
import { useState, useEffect,useRef } from 'react';
import img8 from './assets/img-9.png';
// import song from "./assets/song.mp3";
import { CiWarning } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import BackgroundMusic from './autoplay';

function Home() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//         const hasPlayed = sessionStorage.getItem("audioPlayed");

//         if (!hasPlayed) {
//             audioRef.current.volume = 1; // Ensure volume is 100%
//             audioRef.current.muted = false; // Unmute
//             audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));

//             // Mark audio as played
//             sessionStorage.setItem("audioPlayed", "true");
//         }
//     }
// }, []);

  

  const [progress, setProgress]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setProgress((prev)=>{
        if(prev>=100){          
          return 100;
        }
        return prev + 1;
      });
    },300);
    return()=> clearInterval(interval);
  },[]);

  return (
    <>
    <BackgroundMusic/>
      <div className="container-fluid p-0 m-0 text-white fw-bold main-box">
          <div className="container inside-box">
            <h1 className='text-center' ><img src={img8} alt=" img not" /></h1>
            {/* <ImEvil /> */}
            <h3 className='display1 text-center' style={{fontSize:'2rem'}}>Hacked !
           
            </h3>
            <h2 >You Have Been <br />Hacked <CiWarning /></h2>
           
              <p className='mb-0'>Data Transfer... <span className="spinner-border spinner-border-sm text-white"></span></p>
              <div className="progress progress-container mt-0 pt-0" style={{width:"100%", height:'30px', fontSize:'1.5rem',backgroundColor:'transparent', border:'1px solid lawngreen'}}>
                <div className="progress-bar" id="progress-bar" style={{ width:`${progress}%`, height:'30px', backgroundColor:"lawngreen", color:'red', fontWeight:'bold' }}>{progress}%</div>
              </div>
              
              <NavLink to="/Aprilfool">
                    <button className='btn btn-warning btn-lg w-100 mt-4 fw-bold fs-1'>
                    <span className="spinner-grow text-success spinner-grow-sm" aria-hidden="true"></span>
                    Cancel Now <ImCancelCircle /></button>
              </NavLink>
              
              {/* <audio ref={audioRef} src={song} autoPlay loop hidden /> */}

          </div>
      </div>
      
    </>
  )
}

export default Home;
