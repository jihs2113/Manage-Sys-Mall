import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";
import Country from "./CountryDD";
import "./signup.scss";

const initialState = {
  prefix: "Ms",
  listOpen: false,
  country: "France",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  pw2: "",
  pwtype: "password",
  visibility: "Show",
  personalData: false,
  privacy: false,
  first_nameError: "",
  last_nameError: "",
  emailError: "",
  passwordError: "",
  pw2Error: "",
  title: [{ name: "Mr" }, { name: "Ms" }, { name: "Mrs" }],
  countries: [
    { name: "Australia" },
    { name: "France" },
    { name: "Italy" },
    { name: "Korea (Republic of)" },
    { name: "Taiwan" },
    { name: "United States of America" },
  ],
};

class Signup extends Component {
  state = initialState;

  //input 값을 state 에 넣어주기
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //checkbox true or false
  handlePersonalData = () => {
    this.setState((initialState) => ({
      personalData: !initialState.personalData,
    }));
  };

  handlePrivacy = () => {
    this.setState((initialState) => ({
      privacy: !initialState.privacy,
    }));
  };

  //form validation 조건
  validate = () => {
    let first_nameError = "";
    let last_nameError = "";
    let emailError = "";
    let passwordError = "";
    let pw2Error = "";

    //first, last name 이 비었을 경우
    if (!this.state.first_name) {
      first_nameError = "First name is required";
    }

    if (!this.state.last_name) {
      last_nameError = "Last name is required";
    }

    //email 에 @가 없을경우
    if (!this.state.email.includes("@")) {
      emailError = "Please enter valid email address";
    }

    //pw 가 8글자 이상, 숫자 포함, uppercase, lower case 포함이 되지 않았을때
    if (!this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      passwordError = "Please enter valid password";
    }

    //password 가 일치하지 않을 때
    if (this.state.pw2 !== this.state.password) {
      pw2Error = "Password doesn't match";
    }

    //if error message가 있으면
    if (
      first_nameError ||
      last_nameError ||
      emailError ||
      passwordError ||
      pw2Error
    ) {
      this.setState({
        first_nameError,
        last_nameError,
        emailError,
        passwordError,
        pw2Error,
      });
      return false; //validate() is false, !isValid, show errormsg
    }

    return true; // validate() is true, isVaalid, setState(initialState)
  };

  handlePW = () => {
    //show-hide password
    const { pwtype } = this.state;
    if (pwtype === "password") {
      this.setState({ pwtype: "text", visibility: "hide" });
    } else {
      this.setState({ pwtype: "password", visibility: "show" });
    }
  };

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectedItem = (t) => {
    //console.log(t.name);
    this.setState({ prefix: t.name, listOpen: false });
  };

  handleCountry = (c) => {
    this.setState({ country: c.name });
  };

  goToLink = () => {
    this.props.history.push("/login");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
  };

  goToMain = () => {
    fetch("http://10.58.2.57:8000/account/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        prefix: this.state.prefix,
        country: this.state.country,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Signup Success!");
          this.props.history.push("/");
        } else {
          alert("Already registered. Please enter a new address");
          this.props.history.push("/signup");
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="Signup">
        <Header />
        <Nav />
        <div className="SignupWrapper flexJustifyCenter">
          <div className="wrapper">
            <h3 className="upper center">Create a Rimowa Account</h3>
            <form
              className="signInForm flexColumnCenter"
              onSubmit={this.handleSubmit}
            >
              <div className="inputWrapper flex">
                <div className="left">
                  <DropdownCheck
                    list={this.state.title}
                    selectedItem={this.state.prefix}
                    listOpen={this.state.listOpen}
                    handleToggle={this.handleToggle}
                    handleSelection={this.selectedItem}
                  />
                </div>
                <div className="right">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name*"
                    value={this.state.first_name}
                    onChange={this.handleInput}
                  />
                  <p className="showError center">
                    {this.state.first_nameError}
                  </p>
                </div>
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.last_nameError}</p>
              </div>
              <div className="countryDD">
                <Country
                  countries={this.state.countries}
                  country={this.state.country}
                  selectedItem={this.handleCountry}
                />
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address*"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.emailError}</p>
              </div>
              <div className="inputWrapper">
                <input
                  type={this.state.pwtype}
                  name="password"
                  placeholder="Password*"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
                <span className="togglePW" onClick={this.handlePW}>
                  {this.state.visibility}
                </span>
                <p className="showError center">{this.state.passwordError}</p>
                <p className="passwordReq center">
                  The password must contain at least 8 characters including 1
                  number, 1 upper and 1 lower case letter
                </p>
              </div>
              <div className="inputWrapper">
                <input
                  type="password"
                  name="pw2"
                  placeholder="Confirm Password*"
                  value={this.state.pw2}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.pw2Error}</p>
              </div>

              <div className="checkWrapper flex">
                <div className="left">
                  <input
                    type="checkbox"
                    checked={this.state.personalData}
                    onChange={this.handlePersonalData}
                  />
                </div>
                <div className="right">
                  <p>
                    I consent to RIMOWA processing my personal data in order to
                    send personalised marketing material in accordance with the{" "}
                    <a href=" ">consent form</a> and the privacy policy.
                  </p>
                </div>
              </div>
              <div className="checkWrapper flex">
                <div className="left">
                  <input
                    type="checkbox"
                    checked={this.state.privacy}
                    onChange={this.handlePrivacy}
                  />
                </div>
                <div className="right">
                  By clicking "create account", I consent to the{" "}
                  <a href=" ">privacy policy</a>.
                </div>
              </div>

              <button className="signupBtn" onClick={this.goToMain}>
                Create Account
              </button>
            </form>
            <div className="caption center">
              <p>By creating an account, you agree to our:</p>{" "}
              <p>
                <a href=" " className="Terms">
                  TERMS OF CONDITIONS
                </a>
                |
                <a href=" " className="Privacy">
                  PRIVACY POLICY
                </a>
              </p>
            </div>
            <div className="Signin center" onClick={this.goToLink}>
              <p>ALREADY HAVE AN ACCOUNT?</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Signup);
