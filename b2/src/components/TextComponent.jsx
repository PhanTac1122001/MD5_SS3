import React from "react";

import { useState } from "react";

export default function TextComponent() {
 
  const [text, setText] = useState("Đây là nội dung ban đầu");

  const changeText = () => {
    setText("Nội dung đã được thay đổi!");
  };
  return (
    <div>
      <p>{text}</p>
    
      <button onClick={changeText}>Thay đổi nội dung</button>
    </div>
  );
}
