import React,{useContext} from 'react';
import style from "./Navbar.module.css"
import {Router,Link} from "@reach/router";
import {ContextProvider} from "../../Context/Context"
import {AuthContextProvider} from "../../Context/AuthContext"
import firebase from "../../firebase"
const Navbar = () => {
    const {setUserProfileData} = useContext(ContextProvider)
    const {currentUser,setCurrentUser} = useContext(AuthContextProvider)
    const signOut =()=>{
        firebase.auth().signOut().then(function() {
        setCurrentUser(null);
        setUserProfileData(null)
        }).catch(function(error) {
        // An error happened.
});
    }
    return (
        <div className={style.Navbar}>
            <div className={style.Navbar__Inner}>
                <div className={style.Logo__Container}>
                   <h1 className={style.Logo}>CHEAPHUNT</h1> 
                </div>
                <div className={style.Navbar__List}>
                    <ul className={style.Navbar__Ul}>
                        <li className={style.List__Item}>
                            <Link to="/">
                                <p className={style.List__Link}>Home</p>    
                            </Link>
                        </li>
                       {currentUser ? 
                       <React.Fragment>
                       <li className={style.List__Item}>
                            <Link to={`profile/${currentUser.uid}`}>
                                <p className={style.List__Link}>Profile</p>    
                            </Link>
                        </li>
                         <li className={style.List__Item}>
                                <p onClick={signOut} className={style.List__Link}>Sign Out</p>    
                        </li>
                        </React.Fragment>
                       :
                       <React.Fragment>
                        <li className={style.List__Item}>
                            <Link to="/Login">
                                <p className={style.List__Link}>Login</p>    
                            </Link>
                        </li>
                        <li className={style.List__Item}>
                            <Link to="/Signup">
                                <p className={style.List__Link}>Sign Up</p>    
                            </Link>
                        </li>
                        </React.Fragment>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
