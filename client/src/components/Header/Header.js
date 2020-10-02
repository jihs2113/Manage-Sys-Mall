import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  state = {};

  goToCart = () => {
    this.props.history.push("/cart");
  };

  goToSignin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="Header">
        <div className="header-menu">
          <div className="header-location">
            <span className="first-word">SHIP TO </span>
            <span>
              FRANCE | <span className="end-word">ENGLISH</span>
            </span>
          </div>
          <div className="header-logoTitle">
            <p>
              <a href="http://localhost:3000/">RIMOWA</a>
            </p>
          </div>
          <div className="header-items">
            <div className="header-signIn">
              <div className="goToSignin" onClick={this.goToSignin}>
                SIGN IN
              </div>
            </div>
            <div className="header-icons">
              <FontAwesomeIcon className="icon1" icon={faSearch} />
              <FontAwesomeIcon className="icon2" icon={faHeart} />
              <FontAwesomeIcon
                className="icon3"
                icon={faShoppingBag}
                onClick={this.goToCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
