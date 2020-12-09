import React , {createContext, useState} from 'react';
export const ContextProvider = createContext();

const Context = ({children}) => {
    // Filter State Functions 
    const [sortState, setSortState] =  useState("Deal Rating")
    const handleSetSortStatus = (event)=>{
              setPageNumber(0)

            const targetValue = event.target.value;
              setSortState(targetValue)
    }

    // Page Number State Functions
    const [pageNumber , setPageNumber] = useState(0);
    const handlePageUP = ()=>{
        setDidCached(false)
        let currentPage = pageNumber
        currentPage++
        setPageNumber(currentPage);
    }
    const handlePageDown = ()=>{
        let currentPage = pageNumber
        currentPage--
        if(currentPage < 0){
            currentPage = 0
        }
        setPageNumber(currentPage);
                setDidCached(false)
    }
    // Home Page Cached Cards
    const [didCached, setDidCached] = useState(false)

    //Game Cards
     const [gameCards, setGameCards] = useState([]);

    return (
        <ContextProvider.Provider value={{handleSetSortStatus,sortState,pageNumber,handlePageUP,handlePageDown,didCached,setDidCached,setGameCards,gameCards}}>
            {children}
        </ContextProvider.Provider>
    );
}

export default Context;
