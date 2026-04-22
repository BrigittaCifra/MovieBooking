import { useState } from 'react'
import './App.css';
import Footer from "./components/Footer/Footer";
import ShowtimePicker from './components/ShowtimePicker/ShowtimePicker.jsx';
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Header from './components/Header/Header.jsx'
import SearchBar from "./components/SearchBar";
import MembershipForm from "./components/MembershipForm/MembershipForm";
import Campaign from './components/Campaign/Campaign.jsx';

function App() {
  const [showMembershipForm, setShowMembershipForm] = useState(false)

  return (
    <>
      <Header onMembershipClick={() => setShowMembershipForm(true)} />
      <HeroCarousel />
      {showMembershipForm && (
        <MembershipForm onClose={() => setShowMembershipForm(false)} />
      )}
      <Campaign />
      <Footer />
    </>
  );
}

export default App;
