import React, { Component } from "react";
import "./Header.css";

class HeaderLogo extends Component {
  render() {
    return (
      <div className="header_logo">
        <h1>Call Counter</h1>
      </div>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_container">
          <HeaderLogo />
        </div>
      </div>
    );
  }
}
