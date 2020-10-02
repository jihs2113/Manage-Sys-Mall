import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './Accessories.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Accessories extends Component {
    
  constructor(){
    super();
    this.state={
      isMouseOver: true,
      heartOver: false,
      product: "",
      colors: ""
     
    }
  }

  handleMouseOver = () => {
    this.setState({
      isMouseOver: false,
      
    })
  }


  handleMouseOut = () =>{
    this.setState({
      isMouseOver: true,
     
    })
    
  }
  

  // handleColorImage = (idx) => {
  //   this.setState({
  //     index: idx
  //   },() => {

  //     if(this.state.index === 0) {
  //       this.setState({
  //         colors: this.props.color[0].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index === 1) {
  //       this.setState({
  //         colors: this.props.color[1].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index ===2){
  //       this.setState({
  //         colors: this.props.color[2].img_url,
  //         isMouseOver: false
  //       })
  //     } else if (this.state.index ===3){
  //       this.setState({
  //         colors: this.props.secondImg,
  //         isMouseOver: false
  //       })
  //     }
  //   })
  // }

  

    render() { 
     
      const { img, secondImg, price, name } = this.props;

        return ( 
            <li className="CabinLimited">
                    <div className="LimitedThumb">
                        <div className="LimitedBody">
                            <a href=" "className="ProductLink">
                                <div className="ProductImage">
                                <img src={this.state.isMouseOver ? img : secondImg}
                                  className="LimitedImage" 
                                  onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}
                                  alt=""/>
                                </div>
                                <div className="ProductCat">accessories</div>
                                <div className="ProductRyme">{name}</div>
                            </a>
                            <div className="ProductPrice">
                              <span >{price} €</span>
                            </div>
                            <div className="ProductPromo"></div>
                        </div>
                        <div className="LimitedWish">
                            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart}/> }
                            
                        </div>
                       
                    </div>  
                </li>
         );
    }
}
 
export default withRouter(Accessories);