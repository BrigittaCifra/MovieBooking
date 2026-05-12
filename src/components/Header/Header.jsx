import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { favoriteIcon, menuOpenIcon, menuCloseIcon, locationIcon } from '../Icons.jsx';

//Components
import Button from '../Button/Button.jsx'
import './Header.css';
import '../../styles/variables.css'
import SearchBar from "../SearchBar/SearchBar.jsx";
import LocationSelector from "../LocationSelector/LocationSelector.jsx";

function Header({ onMembershipClick }) {
    //Håller koll på om hamburgar menyn på mobila enheter (upp till 768 px) är öppen eller stängd
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    //Meny länkarna finns utanför JSX delen för att enkelt kunna lägga till fler meny länkar i framtiden
    const menuLinks = [
        { id: 1, name: "Movies" },
        { id: 2, name: "Favorites" }
    ];

    return (
        <header>
            <nav className='container'>

                {/* Mobil nav — dold på desktop */}
                <div className='mobile-nav-top'>
                    <Link to="/" className='header_logo' onClick={() => setMobileMenuOpen(false)}>CinEvent</Link>

                    <div>
                        <LocationSelector />
                        <Button
                            text={mobileMenuOpen ? menuCloseIcon : menuOpenIcon}
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            ariaLabel={mobileMenuOpen ? "Close menu" : "Open menu"}
                        />
                    </div>
                </div>
                {mobileMenuOpen &&
                    <div className='mobile-nav-bottom'>

                        {/* Meny länkar */}
                        <ul>
                            {menuLinks.map((e) => { return <li key={e.id}><Link to={`/${e.name}`} onClick={() => setMobileMenuOpen(false)}>{e.name}</Link></li> })}
                        </ul>
                        <SearchBar />
                        <div>
                            <Button text="Log in" btnType='secondary' />
                            <Button text='Membership' btnType='primary' onClick={onMembershipClick} />
                        </div>

                    </div>
                }

                {/* Desktop nav — dold på mobil */}
                <div className="desktop-nav">
                    <div className="desktop-nav-left">
                        <Link to="/" className='header_logo'>CinEvent</Link>

                        <div className="desktop-nav-links-search">
                            <ul>
                                {menuLinks.map((e) => (
                                    <li key={e.id}>
                                        <Link to={`/${e.name}`}>{e.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <SearchBar />
                        </div>
                    </div>

                    <div className="desktop-nav-right">
                        <LocationSelector />
                        <Button text="Log in" btnType='secondary' />
                        <Button text='Membership' btnType='primary' onClick={onMembershipClick} />
                    </div>
                </div>

            </nav >
        </header >
    )

}

export default Header;