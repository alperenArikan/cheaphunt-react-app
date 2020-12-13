import React from 'react';
import Input from '@material-ui/core/Input';
import style from "./FormInput.module.css"
import Button from '@material-ui/core/Button';
const Form = () => {
    return (
        <React.Fragment>
            <div className={style.Form__Container}>
            <Input className={style.Form__Input } placeholder="Your Email"></Input>
            <Input className={style.Form__Input } placeholder="Password"></Input>
            <Button variant="contained" className={style.Button}>Sign Up</Button>
            </div>
        </React.Fragment>
    );
}

export default Form;
