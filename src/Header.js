import React from "react";
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
function Header() {
  return (
    <div className="header">

      <div className="header_left">
        <MenuIcon />
        <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" alt=""/>
      </div>


      <div className="header_input">
        <input placeholder="Search " type="text"/>
        <SearchIcon className="header_inputButton" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
          <AppsIcon className="header_icon" />
          <NotificationsIcon className="header_icon"  />
          <Avatar
            alt="Big boss"
            src="https://kitt.lewagon.com/placeholder/users/alexek1987"
          />
        </div>
    </div>
  )
}

export default Header