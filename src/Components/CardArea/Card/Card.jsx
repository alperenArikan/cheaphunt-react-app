import React,{useContext} from 'react';
import style from "./Card.module.css"
import {Link} from "@reach/router"
import _ from "lodash";
import {ContextProvider} from "../../../Context/Context"
import { red } from '@material-ui/core/colors';
import {db} from "../../../firebase"
const Card = (props) => {
const {didLogIn,userProfileData} = useContext(ContextProvider)

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
        <React.Fragment>
        {  
            props.gameCards.map(x=>{

                let routeLink = _.kebabCase(_.lowerCase(x.title))
                return(
                    <div key={x.title} className={style.Card__Container}>
                    <div className={style.Game__Card}>
                    <div className={style.Image__Area}>
                        <img className={style.Image} src={x.thumb} alt=""/>
                    </div>
                    <div className={style.Info__Area}>
                        <p className={style.Game__Title}>
                            {x.title}
                        </p>
                        <span className={style.Old__Price}>{x.normalPrice}</span>
                        <span className={style.New__Price}>{x.salePrice}</span>
                        <Link best={x.salePrice} className={style.Details__Button} to={`/details/${routeLink}`}>
                        <p href="#">Details</p>
                        </Link>
                        {  
                            didLogIn && userProfileData ? <i onClick={()=>addFavorites(x.gameID)}  style={userProfileData.favorites.includes(x.gameID)?{color:"red"} : {}} class={`fas fa-heart fa-3x ${style.Like__Button}`}/> : ""
                        }


                    </div>
                    </div>
                    </div>
                );
            })

        }
        </React.Fragment>
        
    );
}

export default Card;
