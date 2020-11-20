import React from 'react'
import '../Menu/Menu';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import './Header.scss';
import PhoneMenu from '../Menu/PhoneMenu';
import Bars from '../Menu/Bars';

export default function Header() {
    const [menuPhone,setMenuPhone] = React.useState(false);

    function openMenu(){
        setMenuPhone(!menuPhone);
    }
    return <header className="header">
        <Social />
        <Bars openMenu={openMenu} />
        <PhoneMenu isOpen={menuPhone} openMenu={openMenu} />
        <div className="header__box">
            <a href="/" className="heading-content-text">
                <span className="small-text">HOMIE</span>
                <h1>DEV.</h1>
            </a>
            <div className="typewriter">
                <h1>Hi! This is <strong>Homiedev.</strong></h1>
                <h1>Just a simple website <br/> to learn <strong>Frontend</strong></h1>
            </div>
        </div>
        <Menu />
    </header>
}
