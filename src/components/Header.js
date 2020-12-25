import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    //   Header Component
    <div className="header">
      {/* Left Menu */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt="Gmail Logo Lockup"
        />
      </div>
      {/* Center */}

      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          className="header_middleInput"
          placeholder="Search mail"
          type="text"
        />
        <IconButton>
          <ArrowDropDownIcon className="header__inputCaret" />
        </IconButton>
      </div>

      {/* Right Menu */}
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
