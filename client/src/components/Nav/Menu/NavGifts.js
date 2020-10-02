import React, { Component } from "react";
import "./NavGifts.scss";

class NavGifts extends Component {
  render() {
    return (
      <div className="NavGifts">
        <ul>
          <li className="gift-list1">
            <span className="GiftGuides-title">GIFT GUIDES</span>
            <div>
              <p>Travel Accessories</p>
              <p>Dior and RIMOWA</p>
              <a>All gifts</a>
            </div>
          </li>
          <li className="gift-list2">
            <span>BUSINESS TRIP READY</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw67345e13/images/260/megamenu/3-B.png"
                alt="3-B.png"
              />
            </div>
            <a>Professional luggage to work with</a>
          </li>
          <li className="gift-list3">
            <span>TRAVELLER FAVOURITES</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw28feb7df/images/260/megamenu/MustHave.jpg"
                alt="MustHave.jpg"
              />
            </div>
            <a>Our most popualr products</a>
          </li>
          <li className="gift-list4">
            <span>RIMOWA UNIQUE</span>
            <div>
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw5d3fc4e5/images/260/megamenu/RimowaUnique.jpg"
                alt="RimowaUnique.jpg"
              />
            </div>
            <a>Make your own RIMOWA Classic</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavGifts;
