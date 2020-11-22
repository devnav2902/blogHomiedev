import React from 'react'

const UtilsContext = React.createContext();
function UtilsProvider({children}) {
    const [zoom,setZoom] = React.useState(false);

    const themeStorage = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'; 
    const [theme,setTheme] = React.useState(themeStorage);
    function handleZoom(){
        setZoom(!zoom);
    }
    function handleTheme() {
        let handle = '';
        if(theme === 'dark')
            handle = 'light';
        else
            handle = 'dark';           

        localStorage.setItem('theme',handle);
        setTheme(handle);
    }
    return <UtilsContext.Provider value={{zoom,handleZoom,theme,handleTheme}}>
            {children}
    </UtilsContext.Provider>
}

export {UtilsContext,UtilsProvider}

