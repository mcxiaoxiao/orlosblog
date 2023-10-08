import { useState } from 'react'
import myLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://mcxiaoxiao.github.io/orlosblog/" target="_blank">
          <img src={myLogo} className="logo" alt="Hole Logo" />
        </a>
      </div>
      <h1>OrlosZiming's hole</h1>
      <h3 className="subtitle">
      喜欢搭积木的狗勾先生子铭的coding小窝
      </h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          让我们开始吧!!!!00000000000!!11{count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
