import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";
import ShowtimePicker from './components/ShowtimePicker/ShowtimePicker.jsx';
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Header from './components/Header/Header.jsx'


function App() {

  return (
    <>
      <Header />
      <HeroCarousel />
      <ShowtimePicker />
      <Footer />
    </>
  )
}

export default App