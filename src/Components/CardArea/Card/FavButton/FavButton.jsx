import React,{useContext} from 'react';
import style from "./FavButton.module.css";
import {ContextProvider} from "../../../../Context/Context"
const FavButton = ({x,onClick}) => {
const {userProfileData} = useContext(ContextProvider)
    return (
        <React.Fragment>
                        {
                            userProfileData ? <span onClick={()=>onClick(x.gameID)} className={style.Like__Button} style={userProfileData.favorites.includes(x.gameID) ? {color:"red"}: {}}><i class="fab fa-gratipay fa-2x"></i></span> : ""

                        }
        </React.Fragment>

    );
}

export default FavButton;
