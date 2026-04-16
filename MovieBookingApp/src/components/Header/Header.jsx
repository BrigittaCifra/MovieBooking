import { useState } from 'react';
import { favoriteIcon, menuOpenIcon, menuCloseIcon, locationIcon } from '../Icons.jsx';
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
                        <input type="text" placeholder="Search..." aria-label="Search" />

                        <div>
                            <Button text={<>{favoriteIcon} Favoriter</>} type='secondary' />
                            <Button text="Logga in" type='secondary' />
                            <Button text='Bli medlem' type='primary' />
                        </div>

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
                        <Button text={<>{locationIcon} Välj plats</>} type='small' />
                        <Button text={favoriteIcon} type='small' />
                        <Button text="Logga in" type='secondary' />
                        <Button text='Bli medlem' type='primary' />
                    </div>
                </div>

            </nav >
        </header >
    )

}

export default Header;