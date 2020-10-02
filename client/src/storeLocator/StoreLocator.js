import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import LocatorList from '../components/LugProduct/LocatorList';
import DropdownLugg from '../components/LugProduct/DropdownLugg';
import CheckPrice from '../components/LugProduct/CheckPrice';
import CheckCollect from '../components/LugProduct/CheckCollect';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Gmap from '../components/LugProduct/Gmap';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import './StoreLocator.scss';




class StoreLocator extends Component {
  constructor(){
    super();
    this.state={
      selectValue: "",
      data: [],
      name: "",
      isToggleOn: false,
      radioGroup: {
        stores: false,
        repairs: false
      },
      zoom:
        "16"
      ,
      style: {
        width: "100%",
        height: "400px"
      },
    
    };
    this.filterDropdownChange = this.filterDropdownChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }


  filterDropdownChange(e){
    this.setState({ selectValue: e.target.value });
  }
  
  handleDropdown(){
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));

  }

  componentDidMount(){
    fetch("/data/JHdata.json")
    .then((response) => response.json())
    .then((response) => this.setState({data: response.products}));
  }

  handleRadio(e) {
    let obj = {}
    obj[e.target.value] = e.target.checked // true
    this.setState({radioGroup: obj})
    console.log(this.state);
}

 

  render() {
   
    
    return(
      <div className="List">
         <Header/>
          <Nav/>
        
        <main className="ListMain">
          <div className="ListTop">
            <div className="ListFilter">
              <div className="StoreToggle">
                  <button onClick={this.handleDropdown} className="ToggleButton">STORE LOCATOR</button>
                  {this.state.isToggleOn ?(
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="ColorFilter">
                                <span>Color</span>
                                {this.state.data.map( product =>{
                                return (<DropdownLugg colorName={product.colorName} lugColor={product.lugColor}
                                />);})}
                            </div>
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
              <div className="active">
              <div className="StoreSeller">
                <div className="Seller">
                  <span className="SortBy">HOTEL REPAIR</span>
                </div>
              </div>
              </div>
              <div className="active">
              <div className="RepairService">
                  <div className="repair">
                    <span className="service">REPAIR SERVICE</span>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="MapContainer">
              <div className="SubTitle">
                  <h2>Store locator</h2>
                  <p>
                    Find the nearest RIMOWA store or client care center anywhere 
                    in the world.
                  </p>
              </div>
              <div className="MapTitle">
                    <div className="CityName">
                        <span>
                          <Gmap/>

                        </span>
                    </div>
                    <div className="CityPoint">

                    </div>
              </div>
              <div className="GoogleMap">
                      <Map google={this.props.google} 
                         
                          zoom={13} style={this.state.style}
                          center={{ lat: 37.522050, lng: 127.026260}}
                          
                        >
                         <Marker position={{ lat: 37.525293, lng: 127.047441}}
                          name={this.state.name}
                          zoom={this.state.zoom}
                          icon="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dw9170d170/images/pin.png"
                          onClick={(zoom, map) => this.onMarkerClick(zoom, map)}
                         
                         />
                         <Marker position={{ lat: 37.508746, lng: 127.059921}}
                          name={'RIMOWA'}
                          icon="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dw9170d170/images/pin.png"
                         />
                         <Marker position={{ lat: 37.512224, lng: 127.101935}}
                          name={'RIMOWA'}
                          icon="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dw9170d170/images/pin.png"
                         />
                        <InfoWindow 
                            marker={this.state.activeMarker}
                            onOpen={this.windowHasOpened}
                            onClose={this.windowHasClosed}
                            visible={this.state.showingInfoWindow}>
                        
                        </InfoWindow> 
                      </Map>
              </div>
                  <div className="LocatorFilter">
                  <div className="StoreOption">
                      <div>
                        FILTER BY:
                      </div>
                      
                      <label className="FilterLoc">
                          <input type="checkbox" name="radioGroup" value='stores' 
                          checked={this.state.radioGroup['stores']} 
                          onChange={this.handleRadio} className="LocCheck"/>
                          <a href=" " className="LocName" >
                              RIMOWA STORES
                           </a>
                      </label>
                      
                      <label className="FilterLoc">
                          <input type="checkbox" name="radioGroup" value='repairs' 
                          checked={this.state.radioGroup['repairs']} 
                          onChange={this.handleRadio} className="LocCheck"/>
                          <a href=" " className="LocName" >
                              RIMOWA REPAIRS
                           </a>
                      </label>
                  </div>
                  </div>
          </div>
          <div className="StoreContainer">
            
            <ul className="StoreCabin">

                {this.state.data.map( product =>{
                return (<LocatorList StoreImg={product.StoreImg} StoreName={product.StoreName} StoreFloor={product.StoreFloor} StoreCountry={product.StoreCountry}
                  StoreCity={product.StoreCity} StorePart={product.StorePart}
                />);})}

            </ul>
          </div>
          <Footer/>
        </main>
      </div>
    )
  };
};

export default withRouter(GoogleApiWrapper({
  apiKey: ("AIzaSyBNZX-6kv1qXqu1MCEdfqZPNiAYu9hyKOE")

})(StoreLocator))
