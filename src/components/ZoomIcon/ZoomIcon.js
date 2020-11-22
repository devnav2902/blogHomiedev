import React from 'react'
import {BsArrowsFullscreen,BsArrowsAngleContract} from 'react-icons/bs'
import './ZoomIcon.scss'
import {UtilsContext} from '../../context/utils'

export default function ZoomIcon() {
    const {zoom,handleZoom} = React.useContext(UtilsContext);

    if(zoom){
        document.getElementById('root').classList.add('zoomin');
    }
    else {
        document.getElementById('root').classList.remove('zoomin');
    }
    
    return <div className="zoom-icon icon">
            {zoom ? 
            <BsArrowsAngleContract onClick={()=> handleZoom()} /> : 
            <BsArrowsFullscreen onClick={()=> handleZoom()} />}
    </div>
}
