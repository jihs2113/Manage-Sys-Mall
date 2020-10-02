import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './CheckCollect.scss';



class  CheckCollect extends Component {
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
                <input type="checkbox" name="radioGroup" value='a' 
                checked={this.state.radioGroup['a']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    CLASSIC
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='b' 
                checked={this.state.radioGroup['b']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    DIOR AND RIMOWA
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='c' 
                checked={this.state.radioGroup['c']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    ESSENTIAL
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='d' 
                checked={this.state.radioGroup['d']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    ESSENTIAL LITE
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='e' 
                checked={this.state.radioGroup['e']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    ESSENTIAL SLEEVE
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='f' 
                checked={this.state.radioGroup['f']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                     HYBRID
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='g' 
                checked={this.state.radioGroup['g']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    ORIGINAL
                </a>
            </label>
            <label className="OneCollection">
                <input type="checkbox" name="radioGroup" value='h' 
                checked={this.state.radioGroup['h']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointCollection">
                    
                    RIMOWA X GARRETT LEIGHT
                </a>
            </label>
        </ul>


        );
    }
}
 

export default withRouter(CheckCollect);