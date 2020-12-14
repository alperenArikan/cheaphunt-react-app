import React, {useContext} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import DealsBar from "./Components/DealsBar/DealsBar/DealsBar";

import style from "./App.module.css"
import {Router} from "@reach/router";
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"

import Login from "./Pages/Login/Login"
import Signup from "./Pages/SignUp/Signup"
import Profile from "./Pages/Profile/Profile"
import Reset from "./Pages/Reset/Reset"
import NotFound from "./Pages/Default/NotFound"
import {AuthContextProvider} from "./Context/AuthContext"
const App = () => {
const {currentUser} = useContext(AuthContextProvider)

  return (
    <React.Fragment>
      <Navbar />
      <DealsBar>
      </DealsBar>
      <div className={style.Main__Body}>
        <Router>
          <Home path="/"></Home>
          <Details path="/details/:title"></Details>
          <Login path="/login"></Login>
          <Signup path="/signup"></Signup>
          <Profile path="/profile"></Profile>
          <Reset path="/reset"></Reset>
          <NotFound default />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;

