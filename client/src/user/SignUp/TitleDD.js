import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class TitleDD extends Component {
  state = {
    products: [
      {
        id: 0,
        name: "Trunk XL",
        size: "80x44x46 cm",
      },
      {
        id: 1,
        name: "Cabin S",
        size: "80x44x46 cm",
      },
      {
        id: 2,
        name: "Cabin Plus",
        size: "80x44x46 cm",
      },
      {
        id: 3,
        name: "Check-In M",
        size: "80x44x46 cm",
      },
    ],
    selectedItem: "Mr",
    listOpen: false,
  };

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectedItem = (p) => {
    console.log("clicked", p.name);
    this.setState({ selectedItem: p.name, listOpen: false });
  };

  render() {
    return (
      <div>
        {/* <DropdownCat category="Size" list={this.state.location} /> */}
        <DropdownCheck
          products={this.state.products}
          selectedItem={this.state.selectedItem}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          handleSelection={this.selectedItem}
        />
      </div>
    );
  }
}

export default TitleDD;
