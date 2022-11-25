import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calendar />
    </div>
  )
}

export default App
