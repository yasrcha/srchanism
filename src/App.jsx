import { useState } from 'react'
import faymayPhoto from './assets/faymay.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="http://x.com/srchanism" target="_blank">
          <img src={faymayPhoto} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Srchanism Site/Card</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          O site está em construção, volte futuramente.
        </p>
      </div>
      <p className="read-the-docs">
        Progresso depende unicamente da boa vontade da @srchanism em estudar/codar.
      </p>
    </>
  )
}

export default App
