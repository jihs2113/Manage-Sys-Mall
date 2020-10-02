import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './LocatorList.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class LocatorList extends Component {
    
    constructor(){
      super();
      this.state={
        isMouseOver: true,
        heartOver: false,
        product: "",
        colors: "",
        index: 0
      }
    }

    handleMouseOver = (idx) => {
      this.setState({
        isMouseOver: false,
        index: idx
      })
    }


    handleMouseOut = () =>{
      this.setState({
        isMouseOver: true,
        index: 0
      })
      
    }



    render() { 
      
        return ( 
            <li className="StoreLimited">
                <div className="StoreThumb">
                        <a className="StoreBody" href=" ">
                            <img src= {this.props.StoreImg}
                                className="StoreImg" alt=""/>
                        </a>
                        <div className="StoreFooter">
                            <div className="StoreNameBody">
                                <div className="StoreName">
                                    <span className="PartDetail">{this.props.StoreName}</span>
                                </div>
                                <div className="StoreFloor">
                                    <span className="FloorDetail">{this.props.StoreFloor}</span>
                                </div>
                                <div className="StoreCity">
                                    <span className="PartDetail">{this.props.StoreCity}</span>
                                </div>
                                <div className="StoreCountry">
                                    <span className="FloorDetail">{this.props.StoreCountry}</span>
                                </div>
                            </div>
                            <div className="StorePart">
                                <span className="CityDetail">{this.props.StorePart}</span>
                            </div>
                        </div>
                        <div className="LimitedWish">
                            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart}/> }
                            
                        </div>
                </div>
            </li>
         );
    }
}
 
export default withRouter(LocatorList);