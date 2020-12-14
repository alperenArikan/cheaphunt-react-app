import React,{useState, useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Login.module.css"
import firebase,{db} from "../../firebase"
import { Alert} from '@material-ui/lab';
import {Redirect,Link} from "@reach/router"
import {ContextProvider} from "../../Context/Context"
import {AuthContextProvider} from "../../Context/AuthContext"


const Login = () => {
    const {login,error,currentUser,setCurrentUser} = useContext(AuthContextProvider)

    if(currentUser){
        return <Redirect to="/" noThrow  />
    }
    return (
 <React.Fragment>
     <div className={style.Container}>
        <h1>Login</h1>
        {error ?
        <Alert severity="error">
            {error.message}
        </Alert>
        : ""}
        <Form page="Login" submitHandler={login}></Form>
        <Link to="/Reset">Forgot My Password</Link>
     </div>
 </React.Fragment>
    );
}

export default Login;
