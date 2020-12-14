import React, {useState} from 'react';
import SearchResults from "./SearchResults/SearchResults"
import style from "./SearchArea.module.css"
import axios from "axios";
const SearchArea = () => {


    const [searchedGamesList, setSearchedGamesList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [searchedHappened, setSearchHappened] = useState(false)
    const [searchFocused, setSearchFocused] = useState(false);

    // --------------------- Search Handle-------------------------
    const handleSearchChange = async (e) => {
      const targetValue = e.target.value;
      setSearchValue(targetValue)
      if (targetValue.length <= 2) {
        return
      }
      axios.get(`https://www.cheapshark.com/api/1.0/games?title=${targetValue}&limit=8&exact=0`)
        .then(response => setSearchedGamesList(response.data))
        .then(setSearchHappened(true))
        .catch(err => console.log(err))
    }
    // ------------------------Focus Handle------------------------------
    const onFocusHandle = ()=>{
        setSearchFocused(true)
    }

    const onBlurHandler =(e)=>{
        if(isMouseOnSearch === true){
            return
        }
        setSearchFocused(false)
    }
    let isMouseOnSearch = false;
    const mouseEnterHandler= ()=>{
        isMouseOnSearch = true
        setSearchFocused(true)
    }
    const mouseLeaveHandler=()=>{
        isMouseOnSearch = false 

    }

    
    return (
        <div className={style.Search__Area}>
          <form className={style.Game__Search__Form}>
            <input 
            onFocus={onFocusHandle} 
            onBlur={onBlurHandler} 
            onChange={(e) =>handleSearchChange(e)} 
            value={searchValue} 
            className={style.Search__Input} 
            placeholder="Search Games" 
            type="text" />
          </form>

          {searchFocused && searchValue.length>0&& searchedHappened ?
            <SearchResults 
            mouseEnterHandler={mouseEnterHandler} 
            onFocus={onFocusHandle}
            mouseLeaveHandler={mouseLeaveHandler} 
            searchedGamesList={searchedGamesList} />
            : null}


        </div>

    );
}

export default SearchArea;
