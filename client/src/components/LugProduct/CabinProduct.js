import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './CabinProduct.scss';


class CabinProduct extends Component {
    
    render() { 
        return (
            <li className="CabinProduct">
                  <a href=" " className="Thumb">
                    <h5 className="ThumbTitle">YOU MAY ALSO LIKE</h5>
                    <h3 className="ThumbName">Cabin</h3>
                    <div className="Cta">DISCOVER</div>
                    <div className="ThumbProduct">
                      <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwb295d7a3/images/large/92553004_1.png"
                      className="Cabin" alt=""/>
                    </div>s
                  </a>
            </li>
         );
    }
}
 
export default withRouter(CabinProduct);