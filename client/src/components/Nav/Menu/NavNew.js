import React, { Component } from "react";
import Nav from "../Nav";
import "./NavNew.scss";

class NavNew extends Component {
  render() {
    return (
      <div className="NavNew">
        <ul>
          <li className="LATEST">
            <span className="LATEST-title">LATEST</span>
            <div className="nn_mt_sm">
              <p>Original Trunk XL</p>
              <p>RIMOWA x GLCO</p>
              <p>Essential Berry & Glacier</p>
              <p>Dior and RIMOWA</p>
              <a>All new products</a>
            </div>
          </li>
          <li className="Limied-edition1">
            <span>LIMITED EDITION</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw89129996/images/260/megamenu/GLCO@2x.jpg"
                alt="LIMITED EDITION"
              />
            </div>
            <a>RIMOWA x Garrett Leight</a>
          </li>
          <li className="Limied-edition2">
            <span>LIMITED EDITION</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwa722d243/images/260/megamenu/GlacierBerry.jpg"
                alt="GlacierBerry.img"
              />
            </div>
            <a>RIMOWA x Garrett Leight</a>
          </li>
          <li className="Limied-edition3">
            <span>LIMITED EDITION</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwec81bfa5/images/260/megamenu/Dior_2.jpg"
                alt="Dior_2.jpg"
              />
            </div>
            <a>RIMOWA x Garrett Leight</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavNew;
