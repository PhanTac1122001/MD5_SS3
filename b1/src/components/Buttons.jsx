import React from "react";

export default function Buttons(props) {
  const {timeId, handleStart, handlePause, handleReset } = props;
  return (
    <div className="actions">
      {!timeId ? <button onClick={handleStart}>Start</button> : <button onClick={handlePause}>Pause</button>}
      
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
