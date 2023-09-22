import { useState } from "react";


const StateFullForm = () => {

    const [email,setEmail] = useState(null) 
    const [name,setName] = useState(null)
    const [password,setPassword] = useState(null)
    const [error,setError] = useState('')
    const handelSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('password must be 6 cherecter')
        }
        else{
            setError('')
            console.log(email,name,password)
        }
    }

    const handelNameSubmit = e =>{
        setName(e.target.value)

    }

    const handelEmailSubmit = e =>{
        setEmail(e.target.value)
        // console.log(email)
    }

    const handelPassword = e =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
        <input 
        onChange={handelNameSubmit}
        type="text" name="name" id="" />
        <br /> 
        <input 
        onChange={handelEmailSubmit}
        type="email" name="email" id="" />
        <br />
        <input 
        onChange={handelPassword}
        type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
    </form>
        {
        error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFullForm;