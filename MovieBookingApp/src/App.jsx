import { useState } from 'react'
import './App.css';
import Footer from "./components/Footer/Footer";
import DetailsPage from "./components/Details/DetailsPage.jsx";
import ShowtimePicker from './components/ShowtimePicker/ShowtimePicker.jsx';
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Header from './components/Header/Header.jsx'
import SearchBar from "./components/SearchBar";
import MembershipForm from "./components/MembershipForm/MembershipForm";
import MovieCard from "./components/MovieCard/MovieCard.jsx"

function App() {
  const [showMembershipForm, setShowMembershipForm] = useState(false)

  return (
    <>

    <MovieCard movie={{
    id: 1,
    title: "Test Movie",
    genre: ["Action"],
    portraitImg: "https://th.bing.com/th/id/R.698b466bb373cee5851d23a43a05fffb?rik=y0osLJt7k1Z50w&pid=ImgRaw&r=0"
}}/>
      <Footer />
     
    </>
  );
}

export default App;
