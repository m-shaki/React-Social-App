import { useContext, useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";


export default function Login() {
  const email=useRef()
  const password=useRef()

const {user,isFetching,error,dispatch}=useContext(AuthContext)

const handleClick=(e)=>{
  e.preventDefault();
  loginCall({email:email.current.value,password:password.current.value},dispatch)
}
console.log(user)
  return (
    <div className="login" >
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">FaceLook</h3>
            <span className="loginDesc">Connect with Friends and the World around you on FaceLook</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                <button className="loginButton">
                  {isFetching?<CircularProgress />:"Log In"}</button>
                <span className="loginforget">Forget Password</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
