import React,{useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Login.module.css"
import { Alert} from '@material-ui/lab';
import {Redirect,Link} from "@reach/router"
import {AuthContextProvider} from "../../Context/AuthContext"


const Login = () => {
    const {login,error,currentUser} = useContext(AuthContextProvider)

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
        <Link to="/reset">Forgot My Password</Link>
     </div>
 </React.Fragment>
    );
}

export default Login;
