import React from 'react'

const MasonryColumnContext = React.createContext();
function MasonryColumnProvider({children}) {
    const [column,setColumn] = React.useState(3);
    
    React.useEffect(() => {
        const media = [
            window.matchMedia("(max-width: 1366px)"),
            window.matchMedia("(max-width: 900px)"),
            window.matchMedia("(max-width: 600px)")
        ];
        for (var i=0; i<media.length; i++){
            mediaqueryresponse(media[i]); // call listener at first time
            media[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
        }

        function mediaqueryresponse(mql){
            if(media[0].matches) {
                setColumn(3);
            }
            if (media[1].matches){
                setColumn(2);
            }
            if (media[2].matches){
                setColumn(1);
            }
        }
    }, [])

    return <MasonryColumnContext.Provider value={column}>
        {children}
    </MasonryColumnContext.Provider>
}

export {MasonryColumnContext,MasonryColumnProvider}
