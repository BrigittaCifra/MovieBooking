import { useState } from 'react'
import './App.css';
import Footer from "./components/Footer/Footer";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Header from './components/Header/Header.jsx'
import SearchBar from "./components/SearchBar";
import MembershipForm from "./components/MembershipForm/MembershipForm";

function App() {
  const [showMembershipForm, setShowMembershipForm] = useState(false)

  return (
    <>
      <Header onMembershipClick={() => setShowMembershipForm(true)} />
      <HeroCarousel />
      <SearchBar />
      {showMembershipForm && (
        <MembershipForm onClose={() => setShowMembershipForm(false)} />
      )}
      <Footer />
    </>
  );
}

export default App;
