import React,{useState, useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Login.module.css"
import firebase,{db} from "../../firebase"
import { Alert,AlertTitle } from '@material-ui/lab';
import {Redirect} from "@reach/router"
import {ContextProvider} from "../../Context/Context"

const Signup = () => {
    const {didLogIn,setLogin,user,setUser,setUserProfileData} = useContext(ContextProvider)
    const [error,setError]=useState("");
        //login handler
        const submitHandler = (e,email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            setUser(user)
            setLogin(true)
            console.log(user)
        })
        .then(
                async ()=>{
                let data = await db.collection("users").doc(user.user.uid).get();
                setUserProfileData(data.data());
                }
        )
        .catch((error) => {
             setError({
                code:error.code,
                message:error.message
            })
            setTimeout(() => {
                setError("");
            }, 4000);
        });

        e.preventDefault();
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
        <Form page="Login" submitHandler={submitHandler}></Form>
     </div>

     {didLogIn ? <Redirect to="/" noThrow  /> : ""}
 </React.Fragment>
    );
}

export default Signup;
