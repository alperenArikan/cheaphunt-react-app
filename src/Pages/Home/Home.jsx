import React,{useContext, useState} from 'react';
import SearchArea from "../../Components/SearchArea/SearchArea"
import CardArea from "../../Components/CardArea/CardArea"
import FilterArea from "../../Components/FilterArea/FilterArea"
const Home = () => {
    return (
        <React.Fragment>
            <SearchArea />
            <FilterArea/>
            <CardArea/>
        </React.Fragment>
    );
}

export default Home;
