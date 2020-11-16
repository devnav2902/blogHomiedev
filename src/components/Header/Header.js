import React from 'react'
import '../Menu/Menu';
import Menu from '../Menu/Menu';
import './Header.scss';

export default function Header() {
    return <header className="header">
        <div className="header__box">
            <div className="text-center">
                <div className="header-website flex flex-between">
                    <h1 className="heading-content-text mb-3"><a href="/">HOMIEDEV.</a></h1>
                </div>
            </div>
            <div className="typewriter">
                <h1>Hi! This is <strong>Homiedev.</strong></h1>
                <h1>Just a simple website to learn <strong>Frontend</strong></h1>
            </div>
        </div>
        <Menu />
    </header>
}
