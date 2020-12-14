import React, {useEffect, useState} from 'react';
import style from "./DealsBar.module.css"
import axios from "axios";
import OfferCard from "../OfferCards/OfferCards"

const DealsBar = (props) => {
    const [dealsState, setDealsState] = useState([])

    useEffect(()=>{
        axios.get("https://www.cheapshark.com/api/1.0/deals")
        .then(response=>setDealsState(response.data))
        .catch(err=> console.log(err))

    },[])

    const  Cards = dealsState.map(x=>{
    return (<OfferCard dealID={x.dealID} key={x.gameID+Math.random()} title={x.title} normalPrice={x.normalPrice} salePrice={x.salePrice}/>)
    })




    return (
        <div className={style.Deals__Bar}>
            <div className={style.Banner__Area}>
                <h2 className={style.Banner__Text}>
                    Best Offers
                </h2>
            </div>
            {Cards}
        </div>
    );
}

export default DealsBar;
