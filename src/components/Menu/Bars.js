import React from 'react'
import {CgMenu} from 'react-icons/cg';
import './Bars.scss'
export default function Bars({openMenu}) {
    return <div className="menu-bars">
        <CgMenu onClick={()=> openMenu() } />
    </div>
}
