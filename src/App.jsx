import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <h1>React Hooks Practica</h1>
      <div className="card">
        <h2>Exercie Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     
    </>
  )
}

export default App
