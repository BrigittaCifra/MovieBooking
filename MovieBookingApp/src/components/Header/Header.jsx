import { useState } from 'react';
import './Header.css';
import '../../styles/variables.css'

//Ikoner
const openIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>;
const closedIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>;

function Header() {
    //Håller koll på om hamburgar menyn på mobila enheter (upp till 768 px) är öppen eller stängd
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    //Meny länkarna finns utanför JSX delen för att enkelt kunna lägga till fler meny länkar i framtiden
    const menuLinks = [
        { id: 1, name: "Filmer" },
        { id: 2, name: "Evenemang" }
    ];

    return (
        <header>
            <nav className='container'>

                {/* Mobil nav — dold på desktop */}
                <div className='mobile-nav-top'>
                    <a href="#" className='header_logo'>CinEvent</a>
                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                    >
                        {/* Ikon */}
                        {mobileMenuOpen ? closedIcon : openIcon}
                    </button>
                </div>
                {mobileMenuOpen &&
                    <div className='mobile-nav-bottom'>

                        {/* Meny länkar */}
                        <ul>
                            {menuLinks.map((e) => { return <li key={e.id}><a href="#">{e.name}</a></li> })}
                        </ul>
                        <input type="text" placeholder="Search..." aria-label="Search" />


                        <button>Logga in</button>
                        <button>Bli medlem</button>

                    </div>
                }

                {/* Desktop nav — dold på mobil */}
                <div className="desktop-nav">
                    {/* Vänster sida */}
                    <div>
                        <a href="#" className='header_logo'>CinEvent</a>

                        <div>
                            <ul>
                                {menuLinks.map((e) => { return <li key={e.id}><a href="#">{e.name}</a></li> })}
                            </ul>
                            <input type="text" placeholder="Search..." aria-label="Search" />
                        </div>
                    </div>

                    {/* Höger sida */}
                    <div>
                        <button>Logga in</button>
                        <button>Bli medlem</button>
                    </div>
                </div>

            </nav >
        </header>
    )

}

export default Header;