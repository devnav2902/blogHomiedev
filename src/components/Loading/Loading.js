import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader';

import './Loading.scss';

export default function Loading() {    
    return <div className="text-center">
        <PulseLoader color={'var(--blue-color)'}></PulseLoader>
    </div>
}