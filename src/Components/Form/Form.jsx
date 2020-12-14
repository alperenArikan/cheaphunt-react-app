import React, {useState} from 'react';
import Input from '@material-ui/core/Input';
import style from "./Form.module.css"
import Button from '@material-ui/core/Button';
const Form = ({submitHandler,page}) => {
    const [email, setEmail] = useState("")
    const [password ,setPassword] =useState("");
    const handleEmail = (e)=>{setEmail(e.target.value)}
    const handlePassword =(e)=>{setPassword(e.target.value)}

    return (
        <React.Fragment>
            <form className={style.Form__Container} onSubmit={(e)=>submitHandler(e,email,password)}>
            <Input className={style.Form__Input } placeholder="Your Email" onChange={handleEmail}></Input>
            {page != "Reset" ?<Input type="password" className={style.Form__Input } placeholder="Password" onChange={handlePassword}></Input> : ""}
            <Button type="submit" variant="contained" color="primary" className={style.Button}>{page}</Button>
            </form>
        </React.Fragment>
    );
}

export default Form;
