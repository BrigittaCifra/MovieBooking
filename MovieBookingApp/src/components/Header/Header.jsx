import { useState } from 'react';
import { menuOpenIcon, menuCloseIcon, locationIcon } from '../Icons.jsx';
import Button from '../Button/Button.jsx'
import './Header.css';
import '../../styles/variables.css'

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
                    <Button
                        text={mobileMenuOpen ? menuCloseIcon : menuOpenIcon}
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        ariaLabel={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                    ></Button>
                </div>
                {mobileMenuOpen &&
                    <div className='mobile-nav-bottom'>

                        {/* Meny länkar */}
                        <ul>
                            {menuLinks.map((e) => { return <li key={e.id}><a href="#">{e.name}</a></li> })}
                        </ul>
                        <input type="text" placeholder="Search..." aria-label="Search" />

                        <Button text={<>{locationIcon} Välj plats</>} type='icon'></Button>
                        <Button text="Logga in" type='secondary'></Button>
                        <Button text='Bli medlem' type='primary'></Button>

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
                        <Button text={<>{locationIcon} Välj plats</>} type='icon'></Button>
                        <Button text="Logga in" type='secondary'></Button>
                        <Button text='Bli medlem' type='primary'></Button>
                    </div>
                </div>

            </nav >
        </header >
    )

}

export default Header;