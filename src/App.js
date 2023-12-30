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

  return (
    <>
     <Particles init={particlesInit} options={{ preset: "fireworks"}}>
     </Particles>
     <div className="flex flex-col items-center justify-center min-h-screen gap-4 ">
      <span className="text-5xl font-bold text-white z-50 px-4 text-center"><Typewriter loop={true} cursor={true} cursorColor="white" words={newYear}/></span>
      <div className="z-50 text-white font-bold text-3xl text-center ">
        <Countdown date={Date.now() + countdown()} onComplete={() => setNewYear(["Happy","New","Year","2024"])}/>
      </div>
      </div>
    </>
  );
}

export default App;
