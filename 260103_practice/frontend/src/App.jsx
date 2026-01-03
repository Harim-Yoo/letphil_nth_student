import { useState } from 'react'
import './App.css'

function App () {
  const [message, setMessage] = useState("Here is the message");
  const handlePing = async () => {
  const res = await fetch("http://localhost:8080/ping")
  const data = await res.json()
  setMessage(data.message)
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick = {handlePing}> Click </button>
    </div>
  )
}

export default App
