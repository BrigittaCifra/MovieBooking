import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroCarousel />
      <Footer />
    </>
  )
}

export default App