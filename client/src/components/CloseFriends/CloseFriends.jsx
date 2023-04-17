import "./CloseFriends.css"

export default function CloseFriends({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
                <img src={PF+user.profilePicture} alt="friendimage" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        
  )
}
