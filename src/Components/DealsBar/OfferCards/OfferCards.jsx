import React from 'react';
import style from "./OfferCards.module.css"
const OfferCards = (props) => {
    return (
        <a href={`https://www.cheapshark.com/redirect?dealID=${props.dealID}`} className={style.Offer__Card} rel="noreferrer" target="_blank">
            <span className={style.Offer__Name}>
                <p>
                    {
                        props.title.length > 37 ? props.title.substr(0, 37) + "..." : props.title
                    }</p>
            </span>
            <span className={style.Offer__Price}><p>{props.salePrice}</p></span>
            <span className={style.Offer__Price__Old}><p>{props.normalPrice}</p></span>
        </a>
        

    );
}

export default OfferCards;
