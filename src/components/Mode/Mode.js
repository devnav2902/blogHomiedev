import React from 'react'
import {RiSunFoggyFill,RiMoonClearFill} from 'react-icons/ri'
import { UtilsContext } from '../../context/utils'
import './Mode.scss'
export default function Mode() {
    const {handleTheme,theme} = React.useContext(UtilsContext);

    const htmlTag = document.getElementsByTagName('html')[0];
    if(theme !== 'dark'){
        htmlTag.setAttribute('data-theme','dark');
    }
    else{
        htmlTag.removeAttribute('data-theme');
    }

    return <div className="icon mode">
        {theme === 'dark' ? 
        <RiSunFoggyFill onClick={()=> handleTheme()} /> : 
        <RiMoonClearFill onClick={()=> handleTheme()} />} 
    </div>
}
