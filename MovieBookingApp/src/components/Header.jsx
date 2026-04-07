import { useState } from 'react';
import './Header.css';

//Ikoner
const openIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>;
const closedIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>;

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuLinks = ["Filmer", "Evenemang"];

    return (
        <header>
            <nav>
                <div className='mobile-nav-top'>
                    <a href="#">Logo</a>
                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                    >
                        {mobileMenuOpen ? closedIcon : openIcon}
                    </button>
                </div>
                {mobileMenuOpen &&
                    <div className='mobile-nav-bottom'>
                        {/* Meny länkar */}
                        <ul>
                            {menuLinks.map((e, index) => { return <li key={index}><a href="#">{e}</a></li> })}
                        </ul>
                        <input type="text" />


                        <button>Logga in</button>
                        <button>Bli medlem</button>
                    </div>
                }
            </nav >
        </header>
    )

}

export default Header;