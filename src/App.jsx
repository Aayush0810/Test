import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TestComponent } from './components/testComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>nilaksh</h1>
    <TestComponent/>
    </div>
  )
}

export default App
