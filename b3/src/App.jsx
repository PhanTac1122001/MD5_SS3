import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/Text.JSX'

function App() {
  const [count, setCount] = useState(0)
  const [displayText, setDisplayText] = useState(""); 

 
  const handleFormSubmit = (text) => {
    setDisplayText(text);
  };
  return (
    <>
      <Text onSubmit={handleFormSubmit}/>
      <p>{displayText}</p>
    </>
  )
}

export default App
