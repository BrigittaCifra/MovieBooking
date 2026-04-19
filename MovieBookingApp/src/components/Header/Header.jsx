import { useState } from 'react';
import { favoriteIcon, menuOpenIcon, menuCloseIcon, locationIcon } from '../Icons.jsx';
import Button from '../Button/Button.jsx'
import './Header.css';
import '../../styles/variables.css'
import SearchBar from "../SearchBar";

function Header({ onMembershipClick }) {
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

                    <div>
                        <Button text={<>{locationIcon} Välj plats</>} type='small' />
                        <Button
                            text={mobileMenuOpen ? menuCloseIcon : menuOpenIcon}
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            ariaLabel={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
                        />
                    </div>
                </div>
                {mobileMenuOpen &&
                    <div className='mobile-nav-bottom'>

                        {/* Meny länkar */}
                        <ul>
                            {menuLinks.map((e) => { return <li key={e.id}><a href="#">{e.name}</a></li> })}
                        </ul>
                        <SearchBar />

                        <div>
                            <Button text={<>{favoriteIcon} Favoriter</>} type='secondary' />
                            <Button text="Logga in" type='secondary' />
                            <Button text='Bli medlem' type='primary' onClick={onMembershipClick} />
                        </div>

                    </div>
                }

                {/* Desktop nav — dold på mobil */}
                <div className="desktop-nav">
                    <div className="desktop-nav-left">
                        <a href="#" className='header_logo'>CinEvent</a>

                        <div className="desktop-nav-links-search">
                            <ul>
                                {menuLinks.map((e) => (
                                    <li key={e.id}>
                                        <a href="#">{e.name}</a>
                                    </li>
                                ))}
                            </ul>

                            <SearchBar />
                        </div>
                    </div>

                    <div className="desktop-nav-right">
                        <Button text={<>{locationIcon} Välj plats</>} type='small' />
                        <Button text={favoriteIcon} type='small' />
                        <Button text="Logga in" type='secondary' />
                        <Button text='Bli medlem' type='primary' onClick={onMembershipClick} />
                    </div>
                </div>

            </nav >
        </header >
    )

}

export default Header;