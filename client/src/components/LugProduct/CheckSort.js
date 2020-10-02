import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './CheckCollect.scss';



class  CheckSort extends Component {
    constructor(){
        super();
        this.state={

            radioGroup: {
                a: false,
                b: false,
                c: false,
                d: false,
                e: false,
                f: false,
                g: false,
                h: false
              }
        };
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e) {
        let obj = {}
        obj[e.target.value] = e.target.checked // true
        this.setState({radioGroup: obj})
    }

    render() { 
        return (  
        <ul className="CollectionCheck">
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                TOP SELLERS

                </a>
            </label>
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                PRICE LOW TO HIGH

                </a>
            </label>
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                PRICE HIGH TO LOW

                </a>
            </label>
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                SIZE - SMALL TO LARGE

                </a>
            </label>
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                SIZE - LARGE TO SMALL

                </a>
            </label>
            <label className="OneCollection">
               
                <a href=" " className="PointCollection">
                    
                MOST POPULAR
                </a>
            </label>
            
        </ul>


        );
    }
}
 

export default withRouter(CheckSort);