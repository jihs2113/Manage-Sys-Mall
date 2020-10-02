import React, { Component } from "react";
import UniqueATC from "./UniqueATC";
import { withRouter } from "react-router-dom";
import { tagColorMenu } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import "./UniqueTag.scss";
let textValue = [];
class UniqueTag extends Component {
  state = {
    selectedColor: "paprika",
    colorMenu: false,
    addText: false,
    editText: false,
    returnAddText: false,
    joinChecked: false,
    textValue: "",
  };
  handleChange = (value) => {
    this.setState({ selectedColor: value });
  };
  addTextMenu = () => {
    this.setState({ addText: true, colorMenu: true });
  };
  addTextClick = (value) => {
    if (textValue.length < 3) {
      textValue.push(value);
      this.setState({ textValue: textValue });
    }
  };
  deleteTextClick = () => {
    textValue.pop();
    this.setState({ textValue: textValue });
  };
  backColorMenu = () => {
    this.setState({ addText: false, editText: true, returnAddText: true });
  };
  deleteEditText = () => {
    this.setState({ addText: true, editText: false });
  };
  textJoin = (joinChecked) => {
    if (joinChecked === false)
      this.setState({ textValue: textValue.join("."), joinChecked: true });
    else {
      this.setState({ textValue: textValue.join(""), joinChecked: false });
    }
  };
  saveCart = () => {
    const { textValue, selectedColor } = this.state;
    const token = localStorage.getItem("token");

    // if (textValue === "") {
    //   alert("실패");
    //   return;
    // }

    console.log(
      "token",
      token,
      "textValue",
      textValue,
      "selectedColor",
      selectedColor
    );
    fetch("http://10.58.2.57:8000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: 11,
        amount: 1,
        tag: selectedColor,
        tag_text: textValue,
      }),
    });

    // localStorage.setItem("cart", [textValue, selectedColor]);

    // 장바구니 화면으로
    // this.props.history.push("/cart");
  };
  goToMain = () => {
    this.props.history.push("/");
  };
  render() {
    // console.log("textValue", this.state.textValue);
    const {
      selectedColor,
      returnAddText,
      addText,
      textValue,
      editText,
      joinChecked,
    } = this.state;
    return (
      <div className="UniqueTag">
        <div className="utHeaderWrapper flexSpaceBetween flexAlignCenter">
          <div className="left txtUpper flexCenter" onClick={this.goToMain}>
            <i className="fas fa-arrow-left"></i>
            <span className="pdML3">Back to shop</span>
          </div>
          <div className="center" onClick={this.goToMain}>
            RIMOWA
          </div>
          <div className="right"></div>
        </div>
        <div className={addText ? "utWrapper left-margin " : "utWrapper"}>
          <div className="utTag">
            <div className="utImgWrapper">
              <img src={tagColorMenu[selectedColor]} />
              {/* addText가 true이면 텍스트 추가 버튼 사라짐 */}
              <div
                className={addText ? "addText remove" : "addText"}
                onClick={this.addTextMenu}
                style={{ display: returnAddText ? "none" : null }}
              >
                <div className="utAddText">
                  <div className="utStartBtn flexCenter">
                    <i className="fas fa-plus"></i>
                  </div>
                  <span className="utStartText txtUpper">
                    add text and symbol
                  </span>
                </div>
              </div>
              {/* ok를 눌렀을 때 */}
              <div
                className={editText ? "editBtn" : "editBtn remove"}
                onClick={this.deleteEditText}
              >
                <p>EDIT</p>
              </div>
              <div className="utCustomText">
                <ul className="utCharacters flexJustifyCenter">
                  <li>{textValue}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* addText가 true이면 색상 메뉴 사라짐 */}
          <div
            className={addText ? "utPicker remove" : "utPicker"}
            // style={{ display: addText ? "none" : "block" }}
          >
            <form
              className="utPickWrapper flex"
              onChange={(e) => {
                this.handleChange(e.target.value);
              }}
            >
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioBlack"
                  name="radioColor"
                  value="black"
                />
                <label htmlFor="radioBlack" className="black"></label>
                <div className="utColorName">Black</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioPaprika"
                  name="radioColor"
                  value="paprika"
                  checked={selectedColor === "paprika"}
                />
                <label htmlFor="radioPaprika" className="paprika"></label>
                <div className="utColorName">Paprika</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioOcean"
                  name="radioColor"
                  value="ocean"
                />
                <label htmlFor="radioOcean" className="ocean"></label>
                <div className="utColorName">Ocean</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioHoney"
                  name="radioColor"
                  value="honey"
                />
                <label htmlFor="radioHoney" className="honey"></label>
                <div className="utColorName">Honey</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioAzure"
                  name="radioColor"
                  value="azure"
                />
                <label htmlFor="radioAzure" className="azure"></label>
                <div className="utColorName">Azure</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioLagoon"
                  name="radioColor"
                  value="lagoon"
                />
                <label htmlFor="radioLagoon" className="lagoon"></label>
                <div className="utColorName">Lagoon</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioBlush"
                  name="radioColor"
                  value="blush"
                />
                <label htmlFor="radioBlush" className="blush"></label>
                <div className="utColorName">Blush</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioClementine"
                  name="radioColor"
                  value="clementine"
                />
                <label htmlFor="radioClementine" className="clementine"></label>
                <div className="utColorName">Clementine</div>
                <div className="utColorPrice">60€</div>
              </div>
            </form>
          </div>
          <div
            className={addText ? "addTextOption" : "addTextOption remove"}
            // style={{ display: addText ? "block" : "none" }}
          >
            <div className="addTextList">
              <ul className="keywordList">
                <div className="addTextJoin">
                  <span
                    className="join"
                    onClick={() => this.textJoin(joinChecked)}
                  >
                    A.B
                  </span>
                </div>
                <div className="addTextTable">
                  <div className="column1">
                    <li onClick={() => this.addTextClick("A")}>A</li>
                    <li onClick={() => this.addTextClick("B")}>B</li>
                    <li onClick={() => this.addTextClick("C")}>C</li>
                    <li onClick={() => this.addTextClick("D")}>D</li>
                  </div>
                  <div className="column2">
                    <li onClick={() => this.addTextClick("E")}>E</li>
                    <li onClick={() => this.addTextClick("F")}>F</li>
                    <li onClick={() => this.addTextClick("G")}>G</li>
                    <li onClick={() => this.addTextClick("H")}>H</li>
                  </div>
                  <div className="column1">
                    <li onClick={() => this.addTextClick("I")}>I</li>
                    <li onClick={() => this.addTextClick("J")}>J</li>
                    <li onClick={() => this.addTextClick("K")}>K</li>
                    <li onClick={() => this.addTextClick("L")}>L</li>
                  </div>
                  <div className="column2">
                    <li onClick={() => this.addTextClick("M")}>M</li>
                    <li onClick={() => this.addTextClick("N")}>N</li>
                    <li onClick={() => this.addTextClick("O")}>O</li>
                    <li onClick={() => this.addTextClick("P")}>P</li>
                  </div>
                  <div className="column1">
                    <li onClick={() => this.addTextClick("Q")}>Q</li>
                    <li onClick={() => this.addTextClick("R")}>R</li>
                    <li onClick={() => this.addTextClick("S")}>S</li>
                    <li onClick={() => this.addTextClick("T")}>T</li>
                  </div>
                  <div className="column2">
                    <li onClick={() => this.addTextClick("U")}>U</li>
                    <li onClick={() => this.addTextClick("V")}>V</li>
                    <li onClick={() => this.addTextClick("W")}>W</li>
                    <li onClick={() => this.addTextClick("X")}>X</li>
                  </div>
                  <div className="column1">
                    <li onClick={() => this.addTextClick("Y")}>Y</li>
                    <li onClick={() => this.addTextClick("Z")}>Z</li>
                    <li onClick={() => this.addTextClick("&")}>&</li>
                  </div>
                </div>
              </ul>
              <div className="optionbox">
                <div className="textDelete" onClick={this.deleteTextClick}>
                  <FontAwesomeIcon icon={faBackspace} />
                </div>
                <p className="textScore">
                  {textValue.includes(".")
                    ? `${textValue.split("").length} / 5`
                    : `${textValue.length} / 3`}
                </p>
                <p className="btnOk" onClick={this.backColorMenu}>
                  OK
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end utWrapper */}
        <div className="atcComponent">
          <UniqueATC saveCart={this.saveCart} />
        </div>
      </div>
    );
  }
}
export default withRouter(UniqueTag);
