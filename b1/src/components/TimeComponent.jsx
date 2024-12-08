import React, { useState } from "react";
import Buttons from "./Buttons";

export default function TimeComponent() {
  const [time, setTime] = useState(60);
  const [timeId, setTimeId] = useState(null);
  const handleStart = () => {
    setTimeId(
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000)
    );
  };
  const handlePause = () => {
    clearInterval(timeId);
    setTimeId(null);
  };
  const handleReset = () => {
    setTime(60);
    setTimeId(null);
    clearInterval(timeId);
  };
  return (
    <div>
      <Buttons
      timeId={timeId}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
      <p>{time}</p>
    </div>
  );
}
