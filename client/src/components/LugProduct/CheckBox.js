import React from 'react'
import {withRouter} from 'react-router-dom';
import './CheckBox.scss';

// class CheckBox extends Component {
//     constructor(){
//         super();
//         this.state={

//         };
        
//     }
    
//     render() {

//         return (
//             <label className="OnePrice">
//             {
//                 this.props.prices && this.props.prices.map((pric, index) => {
//                   return (
//                     <input key={pric.id} onClick={this.props.handleCheckChieldElement} 
//                         type="checkbox" 
//                         checked={pric.isChecked} value={pric.value} className="PointCheck"
//                     /> 
//                     );
//                 })
//             }
            
//             {this.props.prices && this.props.prices.map((pri, index) => {
//                   return (
//                     <a href=" " className="PointPrice">
//                                     {pri.value}
//                      </a>
//                     );
//                 })
//             }
//         </label>
        
//         )
//     }
// }




export const CheckBox = props => {

    return (
        <label className="OnePrice">
            <input key={props.id} onClick={props.handleCheckChieldElement} 
             type="checkbox" 
            checked={props.isChecked} value={props.value} className="PointCheck"
            /> 
            <a href=" " className="PointPrice">
                {props.value}
            </a>
        </label>
    )
}
export default withRouter(CheckBox);