
import HomePage from "./pages/HomePage/HomePage";
import Profile from "./pages/Profile/Profile"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register" 
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App(){
  const {user}=useContext(AuthContext)
  return( 
    <Router>
      <Routes>
        <Route path="/" element={user? <HomePage/>:<Register/>}/>
          
        <Route path="/login" element={user?<Navigate to="/"/>:<Login/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="/register" element={user?<Navigate to="/"/>:<Register/>}/>
      </Routes>
    </Router>
    
   );
}

export default App;
