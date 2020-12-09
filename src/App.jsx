import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import DealsBar from "./Components/DealsBar/DealsBar/DealsBar";
import SearchArea from "./Components/SearchArea/SearchArea"
import CardArea from "./Components/CardArea/CardArea"
import style from "./App.module.css"
import {Router,Link} from "@reach/router";
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"
import Context from "./Context/Context"
const App = () => {

  return (
    <React.Fragment>

      <Navbar />
      <DealsBar>
      </DealsBar>

      <div className={style.Main__Body}>
      
        <Router>
          <Home path="/"></Home>
          <Details path="/details/:title"></Details>
        </Router>
        
      </div>
    </React.Fragment>
  );
}

export default App;

