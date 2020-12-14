import React,{useState, useContext} from 'react';
import Form from "../../Components/Form/Form"
import style from "./Login.module.css"
import firebase,{db} from "../../firebase"
import { Alert} from '@material-ui/lab';
import {Redirect,Link} from "@reach/router"
import {ContextProvider} from "../../Context/Context"



const Signup = () => {
    const {setCurrentUser,currentUser} = useContext(ContextProvider)
    const [error,setError]=useState("");
        //login handler
        const submitHandler = (e,email,password)=>{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                setCurrentUser(user)
            })
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
        <Link to="/Reset">Forgot My Password</Link>
     </div>
     {currentUser ? <Redirect to="/" noThrow  /> : ""}
 </React.Fragment>
    );
}

export default Signup;
