import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EditionProduct from "../components/LugProduct/EditionProduct";
import CabinProduct from "../components/LugProduct/CabinProduct";
import DropdownLugg from "../components/LugProduct/DropdownLugg";
import CheckPrice from "../components/LugProduct/CheckPrice";
import CheckCollect from "../components/LugProduct/CheckCollect";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import "./ProductList.scss";
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: "",
      data: [],
      isToggleOn: false,
      isSortOn: false,
      hwan: "",
      ata: [],
      fixColor: "",
      num: 0,
      fixPrice: ""
    };
  }
  componentDidMount = () => {
    fetch("/data/JHdata.json")
      .then((response) => response.json())
      .then((response) => this.setState({ data: response.products }));
  };
  // componentDidUpdate(){
  //   fetch("/data/JHdata.json")
  //   .then((response) => response.json())
  //   .then((response) => this.setState({ata: response.products}));
  // }
  filterDropdownChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };
  
  handleDropdown = () => {
        this.setState({
          isToggleOn: !this.state.isToggleOn,
        });
  };

  SortDropdown = () => {
    this.setState((state) => ({
      isSortOn: !state.isSortOn,
    }));
  };
  addHanlder = (zino) => {
    this.setState(
      {
        hwan: zino,
      },
      () => {
        console.log(this.state.hwan);
      }
    );
  };
  
  selectedHandler = (color) => {
    console.log("muya",this.state.data.includes(color));
    if(color===this.state.data.includes(color)){
      console.log("iss",this.state.data.colorName);
    }
    // for(let i=0;i<this.state.data.length;i++){
    //   if(this.state.data[i].includes(color)){
    //     console.log("muya",i);
    //   }
      
    // }
   
    // for(let i=0;i<=this.state.data.length;i++){
    //   if(this.state.data[i].calName.includes(color)){
    //       return i;
    //   }
    // }
    // return 0;
    // if(color==this.state.data.calName){
    //   this.setState({
    //     fixColor: this.state.data.img
    //     // fixcolor는 자식 드롭다운 이미지를 눌렀을때 받아오는 colorName을 넣은 state이다.
    //     // 누른 색상에 대한 이름
    //   });
    // }
  };
  pricedHandler = (price) => {
    this.setState({
      fixPrice: price,
     
    });
  };
  // fetchColor = () => {
  //   fetch("http://10.58.4.117:8000/product/1?color=" + this.state.fixColor)
  //     .then((response) => response.json())
  //     .then((response) => this.setState({ data: response.data }));
  //     this.setState({
  //       isToggleOn: false
  //     })
  // };
  

  // convertImg = (obj) => {
    
  //   for (let i = 0; i < obj.series_color.length; i++) {
  //     if (obj.series_color[i].name.includes(this.state.fixColor)) {
  //       return i;
  //     }
  //   }
  //   return 0;

  // };
  render() {
    // console.log("datasss", this.state.data);
    // console.log("vvh",this.state.data[0].price);
    // console.log("ppp", this.state.fixColor);
    // console.log("nm",this.state.wow);
    return (
      <div className="List">
        <Header />
        <Nav />
        <main className="ListMain">
          <div className="ListTop">
            <div className="TopFilter">
              <div className="FilterToggle">
                <button onClick={this.handleDropdown} className="ToggleButton">
                  FILTER
                </button>
                {this.state.isToggleOn ? (
                  <div className="FilterDropdown">
                    <div className="DropdownBox">
                      <div className="ColorFilter">
                        <span>Color</span>
                        {this.state.data.map((luc) => {
                          return (
                            <DropdownLugg
                              calName={luc.calName}
                              lugColor={luc.lugColor}
                              // color={product.series_color.slice(0, 4)}
                              colorName={luc.colorName}
                              selectedHandler={this.selectedHandler}
                            />
                          );
                        })}
                      </div>
                      <div className="PriceFilter">
                        <span>PRICE</span>
                        <CheckPrice pricedHandler={this.pricedHandler} />
                      </div>
                      <div className="CollectionFilter">
                        <span>PRODUCT COLLENTION</span>
                        <CheckCollect />
                      </div>
                    </div>
                    <div className="DropdownSub">
                      <div className="CancleBox">
                        <button className="CancelBtn">CANCEL</button>
                      </div>
                      <div className="ApplyBox">
                        <button className="RESETBtn">RESET</button>
                        <button
                          onClick={this.fetchColor}
                          onMouseEnter={this.fetchPrice}
                          className="APPLYBtn"
                        >
                          APPLY
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="TopSeller">
                <div className="Seller">
                  <p onClick={this.SortDropdown} className="SortBy">
                    SORT BY
                  </p>
                  {this.state.isSortOn ? (
                    <div className="FilterDropdown">
                      <div className="DropdownBox">
                        <div className="CollectionFilter">
                          <span>PRODUCT COLLENTION</span>
                          <CheckCollect />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="ListContainer">
            <ul className="ListCabin">
              <CabinProduct />
              {this.state.data.map((product) => {
                return (
                  <EditionProduct
                    // collect={product.collection}
                    // proNumber={product.product_number}
                    // name={product.name}
                    // fixName={product.series_color}
                    // price={product.price}
                    // img={product.series_color[this.convertImg(product)]}
                    // youngColor={this.state.fixColor}
                    // color={product.series_color.slice(0, 4)}
                    colors={product.colors}
                    collect={product.collection}
                    price={product.price} name={product.name}
                    img={product.img} secondImg={product.secondImg}
                    fixColor={this.state.fixColor}
                    
                    
                  />
                );
              })}
              
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default withRouter(ProductList);
