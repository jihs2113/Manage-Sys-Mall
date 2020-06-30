import React, { Component } from "react";
import {
  faInstagram,
  faYoutube,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer_1 from "../../images/footer_1.png";
import footer_2 from "../../images/footer_2.png";
import footer_3 from "../../images/footer_3.png";
import footer_4 from "../../images/footer_4.png";
import "./Footer.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="Footer">
        <div className="footer-iconContainer">
          <ul>
            <li className="li1">
              <div className="icon1">
                <img src={footer_1} alt="" />
              </div>
              <p className="li1-title">QUALITY TESTED</p>
              <p>EACH SUITCASE IS</p>
              <p>INDIVIDUALLY INSPECTED</p>
            </li>
            <li className="li2">
              <div className="icon2">
                {" "}
                <img src={footer_2} alt="" />
              </div>
              <p className="li2-title">5-YEAR CUARANTEE</p>
              <p>WHEN REGISTERING YOUR</p>
              <p>PRODUCT ONLINE</p>
            </li>
            <li className="li3">
              <div className="icon3">
                {" "}
                <img src={footer_3} alt="" />
              </div>
              <p className="li3-title">HOTEL REPAIRS</p>
              <p>REPAIRS COMPLETED</p>
              <p>BEFORE YOU DEPART</p>
            </li>
            <li className="li4">
              <div className="icon4">
                {" "}
                <img src={footer_4} alt="" />
              </div>
              <p className="li4-title">CUSTOMER SERVICE</p>
              <p>WHEN REGISTERING YOUR</p>
              <p>PRODUCT ONLINE</p>
            </li>
          </ul>
        </div>
        <div className="footer-menuContainer">
          <ul>
            <li className="li1">
              <span>PRODUCTS</span>
              <p>Original</p>
              <p>Essential</p>
              <p>Essential Lite</p>
              <p>Essential Sleeve</p>
              <p>Hybrid</p>
              <p>Classis</p>
            </li>
            <li className="li2">
              <span>RIMOWA</span>
              <p>Our Story</p>
              <p>Careers</p>
              <p>Catalouge</p>
              <p>News</p>
            </li>
            <li className="li3">
              <span>SUPPORT</span>
              <p>FAQ</p>
              <p>Track Orders</p>
              <p>Create an Account</p>
              <p>Contact Us</p>
              <p>Register my RIMOWA</p>
            </li>
            <li className="li4">
              <span>LEGAL</span>
              <p>Data protection</p>
              <p>Terms & Conditions</p>
              <p>Return policy</p>
              <p>Imprint</p>
            </li>
            <li className="li5">
              <span>FOLLOW US</span>
              <div className="icons">
                <FontAwesomeIcon className="icon1" icon={faInstagram} />
                <FontAwesomeIcon className="icon2" icon={faYoutube} />
                <FontAwesomeIcon className="icon3" icon={faFacebookF} />
                <FontAwesomeIcon className="icon4" icon={faTwitter} />
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-endContainer">
          <div className="footer-endBox">
            <div className="footer-first">
              <span>
                <span className="inner-text">SHIP TO</span> FRANCE
              </span>
              <p>ENGLISH</p>
            </div>
            <div className="footer-center">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw244b3935/images/rim-logo-footer.svg"
                alt="rim-logo-footer.svg"
              ></img>
            </div>
            <div className="footer-end">
              <p>@2020 RIMOWA - ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
