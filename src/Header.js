import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header() {

    return (
      <div className="Header">

        <IconButton>
        <PersonIcon className="Header_icon" fontSize="large"/>
        </IconButton>

        <IconButton>
        <img className="Header_Logo" src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt="Tinder Logo" />
        </IconButton>

        <IconButton>
        <ForumIcon className="Header_icon" fontSize="large"/>
        </IconButton>

       </div>
    )
}

export default Header