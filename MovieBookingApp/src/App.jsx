import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";

import MovieCard from "./components/MovieCard/MovieCard.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="carousel">
      <MovieCard movie={{ title: "If I Had Legs I'd Kick You", genre: ["fantasy", "adventure"], portraitImg: "https://all.web.img.acsta.net/r_500_x/img/5f/56/5f569a9a22dae2c405ff137917fb4074.jpg", age: "PG-13" }} />
      <MovieCard movie={{ title: "The Super Mario Galaxy Movie", genre: ["fantasy", "adventure"], portraitImg: "https://all.web.img.acsta.net/r_500_x/img/5f/56/5f569a9a22dae2c405ff137917fb4074.jpg", age: "PG-13" }} />
      <MovieCard movie={{ title: "Avatar", genre: ["fantasy", "adventure"], portraitImg: "https://all.web.img.acsta.net/r_500_x/img/5f/56/5f569a9a22dae2c405ff137917fb4074.jpg", age: "PG-13" }} />
    </div>
/*
    <>
      <Footer />
    </>
*/
  )
}

export default App
