import "./TopBar.css"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

export default function TopBar() {
  const {user}=useContext(AuthContext);
  console.log(user)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">FaceLook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search for friend,post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon/>
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={
          user.profilePicture ? PF + user.profilePicture
          : PF + "person/noAvatar.png"
        } alt="profie" className="topbarImg" /></Link>
      </div>
    </div>
  )
}
