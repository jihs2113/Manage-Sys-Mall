import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class CountryDD extends Component {
  state = {
    list: this.props.countries,
    listOpen: false,
  };

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  handleSelection = (c) => {
    this.setState({ listOpen: false });
    this.props.selectedItem(c);
  };

  render() {
    return (
      <div>
        <DropdownCheck
          list={this.state.list}
          selectedItem={this.props.country}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          handleSelection={this.handleSelection}
        />
      </div>
    );
  }
}

export default CountryDD;
