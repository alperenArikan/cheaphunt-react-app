import React,{useContext} from 'react';
import style from "./Card.module.css"
import {Link} from "@reach/router"
import _ from "lodash";
import {ContextProvider} from "../../../Context/Context"

import FavButton from "./FavButton/FavButton"
const Card = (props) => {
const {addFavorites} = useContext(ContextProvider)

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
                        <FavButton onClick={addFavorites} x={x} />
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
