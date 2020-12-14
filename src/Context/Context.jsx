import React , {createContext, useState,useEffect} from 'react';
import firebase,{db} from "../firebase"
export const ContextProvider = createContext();

const Context = ({children}) => {
    
    
    // User Logged in ? 

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

    }

    //Game Cards
     const [gameCards, setGameCards] = useState([]);


    //User Profile Data
    const [userProfileData,setUserProfileData]= useState(null);
    
    
    //Favorites Handler
    const addFavorites = (id)=>{
    var favoritesRef = db.collection("users").doc(userProfileData.userid);
    if(userProfileData.favorites.includes(id)){
        let newFavs = userProfileData.favorites.filter(x=>{
            return x != id
        })
        favoritesRef.update({
            favorites:[...newFavs]
        });
        return;
    }
    return favoritesRef.update({
        favorites:[...userProfileData.favorites, id]
    })

    }  

    return (
        <ContextProvider.Provider value={{handleSetSortStatus,sortState,pageNumber,handlePageUP,handlePageDown,setGameCards,gameCards,userProfileData,setUserProfileData,addFavorites}}>
            {children}
        </ContextProvider.Provider>
    );
}

export default Context;
