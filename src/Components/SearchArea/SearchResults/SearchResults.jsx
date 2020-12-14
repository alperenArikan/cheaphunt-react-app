import React from 'react';
import style from "./SearchResults.module.css"
import steamImg from "../../../assets/steam.png"
const SearchResults = (props) => {
  


    return (
        <div 
        onMouseEnter={props.mouseEnterHandler} 
        className={style.Game__Search__Results}
        onMouseLeave={props.mouseLeaveHandler}
        >
        {props.searchedGamesList.map(game=>{
          return(

            <div onFocus={()=>props.onFocus} key={game.gameID} className={style.Game__Card}>
              
              <div className={style.Thumb}>
                <img className={style.Game__Thumb} src={game.thumb} alt=""/>
              </div>
              <div className={style.External}>
                <p className={style.Game__External}>
                <a href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}>
                {game.external}
                </a>
                </p>
              </div>
              
              {game.steamAppID === null ? "":
                <div className={style.Steam}>
                  <a className={style.Game__Steam} href={`https://store.steampowered.com/app/${game.steamAppID}`}>
                    <img className={style.Steam__Image} src={steamImg} alt=""/>
                  </a>
                </div>}
              <div className={style.Cheapest}>
                <a className={style.Game__Cheapest} href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}>
                <span>Best Price</span><span>{game.cheapest}</span></a>
              </div>
            </div>

          )
        })}
      </div>
    );
}

export default SearchResults;
