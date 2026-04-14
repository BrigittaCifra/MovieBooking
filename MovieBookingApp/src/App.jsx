import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";
import ShowtimePicker from './components/ShowtimePicker/ShowtimePicker.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowtimePicker />
      <Footer />
    </>
  )
}

export default App
