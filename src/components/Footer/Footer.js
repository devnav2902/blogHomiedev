import React from 'react'
import './Footer.scss'
import Social from '../Social/Social'
export default function Footer() {
    return <footer className="footer">
        <p className="text">&copy; Copyright {new Date().getFullYear()} Homiedev</p>
        <span>Make with 🖐 and 💻</span>
        <Social />
    </footer>
}
