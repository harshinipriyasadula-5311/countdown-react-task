import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [isDisable, setIsDisable] = useState(false); 

  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      setIsDisable(true); 
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
     } else {
      setIsDisable(false); 
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [startTimer]);
  return (
    <div className="container">
      <div className="time">{time}</div>
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     <button className="start-btn" onClick={() => setStartTimer(true)}
        disabled={isDisable}> Start </button>
      &nbsp;&nbsp; 
      <button className="stop-btn"
        onClick={() => setStartTimer(false)}
        disabled={!isDisable}>Stop </button>
    </div>
  );
};
export default Timer;




































































































































