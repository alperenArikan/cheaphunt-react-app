import React,{useEffect, useContext} from 'react';
import style from "./CardArea.module.css"
import Card from "./Card/Card"
import Loading from "../../assets/Bean Eater-0.9s-237px.svg"
import axios from 'axios';
import {ContextProvider} from "../../Context/Context"
import {db} from "../../firebase"
import {AuthContextProvider} from "../../Context/AuthContext"
const CardArea = () => {
    const {sortState, pageNumber, handlePageDown,handlePageUP,gameCards,setGameCards,setUserProfileData } = useContext(ContextProvider);
    const {currentUser} = useContext(AuthContextProvider)
    useEffect(()=>{
        setGameCards([])
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=12&pageNumber=${pageNumber}&sortBy=${sortState}`)
        .then(response=> setGameCards(response.data))


    },[pageNumber,sortState])
        useEffect(()=>{
        if(currentUser){
        db.collection("users").doc(currentUser.uid)
        .onSnapshot(function(doc) {
            setUserProfileData(doc.data())
            });
            }
    },[currentUser])
    return (
        <React.Fragment>
        <div className={style.Card__Area}>
            {gameCards.length === 0 ? <img src={Loading} alt=""/>:<Card gameCards={gameCards}/>}
        </div>
        <div>
            <span className={style.Pagination}>
                {
                    pageNumber > 0 ?<span onClick={handlePageDown} className={style.Previous}>Previous</span>:""
                }
                <span className={style.Current__Page}>{(pageNumber + 1  )}</span>
                <span onClick={handlePageUP} className={style.Next}>Next</span>
            </span>
        </div>
    </React.Fragment>
    );
}

export default CardArea;
