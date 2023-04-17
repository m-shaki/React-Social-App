import React, { useRef } from "react"
import "./register.css"
import axios from "axios"
import{useNavigate} from "react-router-dom"

export default function Register() {
  const username=useRef()
  const email=useRef()
  const password=useRef()
  const passwordAgain=useRef()
const navigate=useNavigate();


  const handleClick= async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("passwords dont match!")
    }else{
      const user={
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register",user);
        navigate("/login");
      }catch(err){
        console.log(err)
      }
     
    }
  };



  return (
    <div className="login" >
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">FaceLook</h3>
            <span className="loginDesc">Connect with Friends and the World around you on FaceLook</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" required ref={username} className="loginInput" />
               <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                <input minLength="6" placeholder="Password" required ref={password} type="password" className="loginInput" />
                <input placeholder="Confirm Password" required ref={passwordAgain} type="password" className="loginInput" />
                <button className="loginButton" type="submit">Sign Up</button>
                <button className="loginRegisterButton">Log into Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
