import React,{useState, useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Signup.module.css"
import firebase, {db} from "../../firebase"
import { Alert,AlertTitle } from '@material-ui/lab';
import {Redirect} from "@reach/router"
import {ContextProvider} from "../../Context/Context"
// import {loginWithEmail} from "../../utilities"
const Signup = () => {
    const {didLogIn,setLogin,setUser,setUserProfileData} = useContext(ContextProvider)
    const [error,setError]=useState("");
        //login handler
        const submitHandler = (e,email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
                db.collection("users").doc(user.user.uid).set({
                email: user.user.email,
                userid: user.user.uid,
                favorites:[],
                state: "CA",
                country: "USA"
                });
                //if its a new user auto login after signup
                if(user.additionalUserInfo){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    setLogin(true);
                    setUser(user);
                })
                .then(
                async ()=>{
                let data = await db.collection("users").doc(user.user.uid).get();
                setUserProfileData(data.data());
                }
                )

                .catch((error) => {
                    console.log(error);
                });
                }
           }
        )

        // if it gives error, set a error object state and show it in an alert component. Remove alert after 2sec
        .catch((error) => {
            setError({
                code:error.code,
                message:error.message
            })
            // setTimeout(() => {
            //     setError("");
            // }, 2000);
        });
        e.preventDefault();
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
        <Form page="Sign Up" submitHandler={submitHandler}></Form>
     </div>

     {didLogIn ? <Redirect to="/" noThrow  /> : ""}
 </React.Fragment>
    );
}

export default Signup;
