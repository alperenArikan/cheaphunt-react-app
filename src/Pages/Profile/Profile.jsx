import { Redirect } from '@reach/router';
import React,{useContext, useEffect,useState} from 'react';
import {ContextProvider} from "../../Context/Context"
import {AuthContextProvider} from "../../Context/AuthContext"
const Profile = ({userid}) => {
const {currentUser} =  useContext(AuthContextProvider)

    const {userProfileData} = useContext(ContextProvider)
    const [favorites, setFavorites] = useState()


    useEffect(() => {
        if(userProfileData){
            fetch(`https://www.cheapshark.com/api/1.0/games?ids=${userProfileData.favorites.join(",")}`)
            .then(response => response.json())
            .then(data=>{
                let dataKeys = Object.keys(data);
                let favoritesArray = []
                for(let i = 0; i<dataKeys.length; i++){
                    favoritesArray.push(data[dataKeys[i]])
                }
                return favoritesArray
            })
            .then(favoritesArray => setFavorites(favoritesArray))
            .then(console.log(favorites))
        }
    }, [userProfileData]);


    if(!currentUser){
        return <Redirect to="/" noThrow />
    }
    return (
        <React.Fragment>
            <h1> Your Favorites </h1>
            {favorites ? favorites.map(x=>{
            return <img src={x.info.thumb} alt=""/>
            }): ""}

        </React.Fragment>
    );
}

export default Profile;
