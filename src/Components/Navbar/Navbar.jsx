import React from 'react';
import style from "./Navbar.module.css"
import {Router,Link} from "@reach/router";
const Navbar = () => {
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
