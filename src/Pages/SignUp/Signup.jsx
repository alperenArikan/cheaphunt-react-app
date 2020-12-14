import React,{useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Signup.module.css"
import { Alert,AlertTitle } from '@material-ui/lab';
import {Redirect} from "@reach/router"
import {AuthContextProvider} from "../../Context/AuthContext"
const Signup = () => {
    const {signup,error,currentUser} = useContext(AuthContextProvider)


    if(currentUser){
        return <Redirect to="/" noThrow  />
    }
    return (
        <React.Fragment>

            <div className={style.Container}>
                <h1>Sign Up</h1>
                {error ?
                <Alert severity="error">
                    <AlertTitle>{error.code}</AlertTitle>
                    {error.message}
                </Alert>
                : ""}
                <Form page="Sign Up" submitHandler={signup}></Form>
            </div>
        </React.Fragment>
    );
}

export default Signup;
