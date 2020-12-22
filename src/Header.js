import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left"></div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrEbOxezWT8pa0pUI-FfToi80Z00xjn5Wcw&usqp=CAU"
        alt="Facebook-logo"
      />
      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook"/>
      </div>

      <div className="header__center"></div>
      <div className="header__option header__option--active">
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__option">
        <FlagIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SubscriptionsOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <StorefrontOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4> Abdullah </h4>
        </div>
      </div>
      <IconButton>
          <AddIcon/>
      </IconButton>
      <IconButton>
          <ForumIcon/>
      </IconButton>
      <IconButton>
          <NotificationsActiveIcon/>
      </IconButton>
      <IconButton>
          <ExpandMoreIcon/>
      </IconButton>
    </div>
  );
};

export default Header;
