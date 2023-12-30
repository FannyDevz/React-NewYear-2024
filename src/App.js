import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";
function App() {
  const particlesInit = async (main) => {
    await loadFireworksPreset(main);
  };

  const [newYear, setNewYear] = useState(["Bye 2023"]);
  
  function countdown() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    // const newYearDate = new Date("December 30, 2023 15:35:30").getTime();
    const nowDate = new Date().getTime();
    const gapDate = newYearDate - nowDate;
    return gapDate;
  }
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Happy New Year 2024!</span>;
        } else {
            return (
                <span>
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </span>
            );
        }
    };
  return (
    <>
     <Particles init={particlesInit} options={{ preset: "fireworks"}}>
     </Particles>
     <div className="flex flex-col items-center justify-center min-h-screen gap-4 ">
      <span className="text-5xl font-bold text-white z-50 px-4 text-center"><Typewriter loop={true} cursor={true} cursorColor="white" words={newYear}/></span>
         <div className="z-50 text-white font-bold text-lg md:text-2xl lg:text-2xl text-center ">
             {/* Pass the custom renderer to Countdown component */}
             <Countdown date={Date.now() + countdown()} renderer={renderer} onComplete={() => setNewYear(["Happy", "New", "Year", "2024"])}/>
         </div>
      </div>
    </>
  );
}

export default App;
