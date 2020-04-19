import React, { Component } from "react";
import throttle from 'lodash/throttle';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      drawerOpen: false,
      headerShow: false
    };
    this.scrollThrottle = throttle(this.handleScroll,200).bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('scroll',this.scrollThrottle);
  }


  handleScroll = () => {
    if(window.scrollY > 0){
      this.setState({
        headerShow :true
      })
    } else {
      this.setState({
        headerShow :false
      })
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px",
          transition: "background-color .3s ease-out"
        }}
      >
        <Toolbar>
          <div className="header__logo">
            <div className="font_righteous header__logo-venue">The Venue</div>
            <div className="header__logo-title">Musical Event</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
