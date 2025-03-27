import { useState } from "react"


function App() {
 
 
  const [ovr,setOvr] = useState(false);
  const [hd,setHd] = useState("");
  const [hdtxt, setHdtext] = useState("");



  
  return (
    <>
      
     <h1>Event Handing Project</h1>
     <h3>Hello {hdtxt}</h3>
     <input onChange={(e) => setHd(e.target.value) } value={hd} type="text" placeholder="Enter something..."/><br/><br/>
     <button style= {{backgroundColor: (ovr === false? "white":"yellow")}}
     onClick={()=> setHdtext(hd)}
     onMouseOver={ ()=> setOvr(true)}
     onMouseOut={()=>setOvr(false)}
     
     >Submit</button>
    </>
  )
}

export default App
