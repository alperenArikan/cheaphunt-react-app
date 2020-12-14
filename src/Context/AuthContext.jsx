import React,{createContext,useState,useEffect} from 'react';
import firebase,{db} from "../firebase"
export const AuthContextProvider = createContext();


const AuthContext = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
            const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setAuthLoading(false)
            })
            return unsubscribe
        }, [currentUser]);

    const login = (e,email,password)=>{
        setAuthLoading(true)
            firebase.auth().signInWithEmailAndPassword(email, password)
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

    const signup = (e,email,password)=>{
    setAuthLoading(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
                db.collection("users").doc(user.user.uid).set({
                email: user.user.email,
                userid: user.user.uid,
                favorites:[],
                state: "CA",
                country: "USA"
                });

           })
        // if it gives error, set a error object state and show it in an alert component. Remove alert after 2sec
        .catch((error) => {
            setError({
                code:error.code,
                message:error.message
            })
            setTimeout(() => {
                setError("");
            }, 2000);
        });
        e.preventDefault();
    }
    return (
        <AuthContextProvider.Provider value={{login,signup,currentUser,setCurrentUser,authLoading,error}}>
            {!authLoading? children : ""}
        </AuthContextProvider.Provider>
    );
}

export default AuthContext;
