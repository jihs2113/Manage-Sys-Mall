import React, { Component } from "react";
import "./Dropdown.scss";

export class DropdownCheck extends Component {
  render() {
    return (
      <div className="DropdownCheck">
        <div className="chHeaderWrapper" onClick={this.props.handleToggle}>
          <div className="chLeft">
            <i className="fas fa-check"></i>
          </div>
          <div className="chCenter">{this.props.selectedItem}</div>
          <div className="chRight">
            <i
              className={
                this.props.listOpen
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>
        <div className={`${this.props.listOpen ? "show" : "hide"}`}>
          <ul className="chFlyout">
            {this.props.list.map((t, idx) => (
              <li
                key={idx}
                className={
                  this.props.selectedItem === t ? "selected" : "unselected"
                }
                onClick={() => this.props.handleSelection(t)}
              >
                <span className="each">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export class DropdownCat extends Component {
  render() {
    //console.log("defaultSize:", this.props.defaultSize);
    return (
      <div className="DropdownCat">
        <div className="CatHeaderWrapper" onClick={this.props.handleToggle}>
          <div className="left">
            <div className="top">{this.props.category}</div>
            <div className="bottom">
              <span className="bleft">{this.props.defaultSize.name}</span>
              <span className="bright">88x44x46cm</span>
            </div>
          </div>
          <div className="right">
            <i
              className={
                this.props.listOpen
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>
        <div className={`${this.props.listOpen ? "CatShow" : "CatHide"}`}>
          <ul className="chFlyout">
            {this.props.list.map((t) => (
              <li
                key={t.id}
                className={
                  this.props.defaultSize === t ? "CatSelected" : "Catli"
                }
                onClick={() => this.props.handleSelection(t)}
              >
                <span className="CatEach">{t.name}</span>
                <span className="CatSize">{t.size}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
