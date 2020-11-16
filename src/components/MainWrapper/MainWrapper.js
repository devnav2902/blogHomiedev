import React from 'react'
import './MainWrapper.scss';

export default function MainWrapper({children}) {
    return <main className="main">
        {children}
    </main>
}
