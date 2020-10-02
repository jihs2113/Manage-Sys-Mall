import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Accessories from '../components/LugProduct/Accessories';
import DropdownLugg from '../components/LugProduct/DropdownLugg';
import CheckPrice from '../components/LugProduct/CheckPrice';
import CheckCollect from '../components/LugProduct/CheckCollect';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import './AccList.scss';



class AccList extends Component {
  constructor(){
    super();
    this.state={
      selectValue: "",
      data: [],
      isToggleOn: false,
      isSortOn: false
    };
    this.filterDropdownChange = this.filterDropdownChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  filterDropdownChange(e){
    this.setState({ selectValue: e.target.value });
  }

  handleDropdown(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }
  
  SortDropdown = () => {
    this.setState(state => ({
      isSortOn: !state.isSortOn
    }));

  }

  componentDidMount(){
    fetch("/data/JHdata.json")
    .then((response) => response.json())
    .then((response) => this.setState({data: response.products}));
  }


  render() {
    console.log(this.state.data);
    
    return(
      <div className="List">
         <Header/>
          <Nav/>
        
        <main className="ListMain">
        <div className="ListTop">
            <div className="TopFilter">
              <div className="FilterToggle">
                  <button onClick={this.handleDropdown} className="ToggleButton">FILTER</button>
                  {this.state.isToggleOn ?(
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                           
                            <div className="PriceFilter">
                                <span>PRICE</span>
                                <CheckPrice/>
                            </div>
                            <div className="CollectionFilter">
                                <span>PRODUCT COLLENTION</span>
                                <CheckCollect/>
                            </div>
                        </div>
                        <div className="DropdownSub">
                                <div className="CancleBox">
                                <button className="CancelBtn">CANCEL</button>
                                </div>
                                <div className="ApplyBox">
                                <button className="RESETBtn">RESET</button>
                                <button className="APPLYBtn">APPLY</button>
                                </div>    
                        </div>
                    </div>
                  ) : (null)
                  }
              </div>
              <div className="TopSeller">
                <div className="Seller">
                <p onClick={this.SortDropdown} className="SortBy">SORT BY</p>
                {this.state.isSortOn ?(
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="CollectionFilter">
                                <span>PRODUCT COLLENTION</span>
                                <CheckCollect/>
                            </div>
                        </div>
                    </div>
                  ) : (null)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="ListContainer">
            <ul className="ListCabin">
                {this.state.data.map( product =>{
                return (<Accessories 
                  // name={product.name} collection={product.collection} price={product.price}
                  //  img={product.series_color[0]}
                  // color={product.colors} 
                  // accName={product.accName}
                  name={product.accName} price={product.accPrice} img={product.accImg} secondImg={product.accSecond}
                />);})}
                
            </ul>
          </div>
          <Footer/>
        </main>
      </div>
    )
  };
};

export default withRouter(AccList);
