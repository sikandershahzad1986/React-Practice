import { useState } from 'react'
import './App.css'

function App() {
  const [nm, setNM] = useState("")
  const [hdtxt, setHdtext] = useState("");


  function getName(e)
  {
    setNM(e.target.value)
  }

  function clicked()
  {
   setHdtext(nm)
  }

  return (
    <>
     <h1>Hello there</h1>
     <h3>{hdtxt}</h3>
      <input onChange={getName} value={nm} type="text" placeholder='Enter Your name'/>
      <button onClick={clicked}>Submit</button>
    </>
  )
}

export default App
