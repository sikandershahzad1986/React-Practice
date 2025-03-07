import { useState } from 'react'
import './App.css'

function App() {
  const [clr, setClr] = useState("black")

 

  return (
    <>

<div className="min-h-screen flex items-center justify-center" style={{backgroundColor: clr}}>
      <div className="max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Background Changer Project!</h1>
        <p className="mt-2 text-gray-600">
          Click on the button to change background color!
        </p>
        <button onClick={ () => setClr('blue')} className="mr-1 mt-4 px-4 py-2 bg-blue-500 text-blue rounded hover:bg-blue-600">Blue</button>
        <button onClick={ () => setClr('red')} className="mr-1 mt-4 px-4 py-2 bg-red-500 text-blue rounded hover:bg-red-600">Red</button>
        <button onClick={ () => setClr('green')} className="mr-1 mt-4 px-4 py-2 bg-green-500 text-blue rounded hover:bg-green-600">Green</button>
        <button onClick={ () => setClr('purple')} className="mr-1 mt-4 px-4 py-2 bg-purple-500 text-blue rounded hover:bg-purple-600">Purple</button>
        <button onClick={ () => setClr('orange')} className="mr-1 mt-4 px-4 py-2 bg-orange-500 text-blue rounded hover:bg-orange-600">Orange</button>
      </div>
    </div>
    
    </>
  )
}

export default App
