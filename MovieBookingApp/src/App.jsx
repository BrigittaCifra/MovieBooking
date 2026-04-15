import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";
import DetailsPage from "components/Details/DetailsPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DetailsPage />
      <Footer />
    </>
  )
}

export default App
