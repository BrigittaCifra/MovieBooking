import { useState } from 'react'
import './App.css';
import Footer from "./components/Footer/Footer";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Header from './components/Header/Header.jsx'

import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroCarousel />
      <SearchBar />
      <main>
    {/* framtida content */}
      </main>

      <Footer />
    </>
  );
}

export default App;
