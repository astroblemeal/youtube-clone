import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      <h1> I am a header</h1>
      <MenuIcon />
      <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg" alt=""/>
      <input type="text"/>
      <SearchIcon />
    </div>
  )
}

export default Header