import React from 'react'
import axios from 'axios';
import {url} from '../utils/URL';
const SocialsContext = React.createContext();
export default function SocialsProvider({children}) {
    const [socials,setSocials] = React.useState([]);
    const [loading,SetLoading] = React.useState(false);
    React.useEffect(()=>{
        axios.get(`${url}/socials`)
            .then(res => {
                setSocials(res.data)
                SetLoading(true);
            })
            .catch(error => console.log(error));
    },[])
    return <SocialsContext.Provider value={{socials,loading}}>
            {children}
        </SocialsContext.Provider>
}
export {SocialsContext,SocialsProvider}
