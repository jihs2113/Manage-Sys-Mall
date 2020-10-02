import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UniqueATC.scss";

class UniqueATC extends Component {
  state = {};

  render() {
    const { saveCart } = this.props;
    return (
      <div className="UniqueATC">
        <div className="atcWrappr flexSBCenter">
          <div className="left">
            <div className="atcTotal">€60.00</div>
            <div className="atcTaxes">Incl.VAT</div>
          </div>
          <div className="right" onClick={saveCart}>
            <div className="unATCBtn">DONE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UniqueATC);
