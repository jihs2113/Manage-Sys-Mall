import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './DropdownLugg.scss';

class DropdownLugg extends Component {
    
    constructor(){
      super();
      this.state={
        isMouseOver: false,
        selectColor: ""
      
      }
    }

    handleMouseOver = () => {
      this.setState({
        isMouseOver: true
      })
    }




    render() { 
  
        return ( 
            <ul className="ColorSwatches">
              <li className="OneColor">
    
                  <img src={this.props.lugColor} className="PointColor" 
                  //onClick={() => this.props.selectedHandler(this.props.colorName)} alt=""/>
                  onClick={() => {this.props.selectedHandler(this.props.colorName);console.log("colorfiltered");}} alt=""/>
                  <span className="PointName">
                    {this.props.colorName}
                  </span>
              </li>
          </ul>
         );
    }
}
 
export default withRouter(DropdownLugg);