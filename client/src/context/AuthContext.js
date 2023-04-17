import {createContext, useEffect, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE={
    user:{
        _id:"6427f4a146cb6a98325410a5",
        username:"shakir",
        email:"shakir@gmail.com",
        password:"$2b$10$iRSg84bUrCLYDdvM8GeJfO/AmuaN9lrHD/QGzd1RgbBPgZyjTOpjG",
        profilePicture:'',
        coverPicture:'',
        followers:[],
        followings:[],
        isAdmin:false
    },
    isFetching:false,
    error:false
};

export const AuthContext=createContext(INITIAL_STATE);


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  /*useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])*/
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};