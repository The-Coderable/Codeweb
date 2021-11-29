import React, {useState} from 'react';
import './header.css';

import DehazeIcon from '@material-ui/icons/Dehaze';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';

export default function Header(){
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <span>
            <Link to="/">Coderable</Link>
          </span>
        </div>
        <div className="headNav">
          <div className="navList">
            <span>
              <Link to="/">Home</Link>
            </span>
           
            <span>
              <a href="https://github.com/the-coderable" target="_blank" rel="noreferrer">Github</a>
            </span>
            <span><a href="https://gitter.im/The-Coderable/community" target="_blank" rel="noreferrer">Chat With Us!</a></span>
          </div>
          <div className="sideBar">
            <DehazeIcon className="sideIcon" onClick={handleClick}/>
          </div>
          <Menu
            id="simple-menu"
            className="sideMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><Link to="/">Home</Link></MenuItem>
            
            <MenuItem>
              <a href="https://github.com/blueedgetechno">Github</a>
            </MenuItem>
            <MenuItem><a href="https://gitter.im/The-Coderable/community">Contact</a></MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}
