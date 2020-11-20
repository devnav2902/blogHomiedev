
// progress bar

import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader';
import Styled from 'styled-components';
import {PostContext} from '../../context/post';

import './Loading.scss';
const Wrapper = Styled.div`
    position:fixed;
    width:100%;
    height:100%;
    z-index:999;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#002133;
    flex-direction:column;
`

export default function Loading() {
    const {loading} = React.useContext(PostContext);
    const [progress,setProgress] = React.useState(0);
    React.useEffect(()=>{
        let value = 0;
        const time = setInterval(() => {
            value++;
            setProgress(value);
            if(value === 100)
                clearInterval(time);
        }, 90);

        if(loading) {
            setProgress(100);
        }
        return () => clearInterval(time);
    },[loading])
    return <Wrapper>
        <div className="flex align-item-end">
            <div className="loading-text mr-1">Homiedev loading</div>
            <PulseLoader color={'var(--blue-color)'} size={6}></PulseLoader>
        </div>
        <div className="myProgress">
            <div style={{width:`${progress}%`}} className="myBar"></div>
        </div>
    </Wrapper>
}
