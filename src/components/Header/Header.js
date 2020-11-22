import React from 'react'
import '../Menu/Menu';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import './Header.scss';
import PhoneMenu from '../Menu/PhoneMenu';
import Bars from '../Menu/Bars';
import ZoomIcon from '../ZoomIcon/ZoomIcon';
import Mode from '../Mode/Mode';

export default function Header() {
    const [menuPhone,setMenuPhone] = React.useState(false);

    function openMenu(){
        setMenuPhone(!menuPhone);
    }
    return <header className="header">
        <div className="utils flex">
            <ZoomIcon />
            <Mode />
        </div>
        <Social />
        <Bars openMenu={openMenu} />
        <PhoneMenu isOpen={menuPhone} openMenu={openMenu} />
        <div className="header__box">
            <div className="typewriter">
                <h1>Hi! This is <strong> <a href="/" className="typewrite__text">Homiedev.</a></strong></h1>
                <h1>Just a simple website to learn <strong>Frontend</strong></h1>
            </div>
        </div>
        <Menu />
    </header>
}
