import { useState } from 'react'
import './App.css'

import './components/Header.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
