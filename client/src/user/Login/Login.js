import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";
import "./Login.scss";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  pwError: "",
  validateError: "",
  pwtype: "password",
  visibility: "Show",
};

class Login extends Component {
  state = initialState;

  //1. input onChange에 값을 state 에 넣어주기
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let emailError = "";
    let pwError = "";
    let validateError = "";

    if (!this.state.email) {
      //state 에 email이 없으면, 즉 빈 string 이면
      emailError = "This field is required"; //emailError에 error 메시지를 넣어준다.
    }

    if (!this.state.password) {
      //state 에 pw가 없으면, 즉 빈 string 이면
      pwError = "This field is required"; //pwError에 error 메시지를 넣어준다.
    }

    /*if (!this.state.validateError) {
      //state 에 pw가 없으면, 즉 빈 string 이면
      validateError =
        "Sorry, this does not match our records. Check your spelling and try again."; //pwError에 error 메시지를 넣어준다.
    }*/

    if (emailError || pwError || validateError) {
      this.setState({ emailError, pwError, validateError });
      return false;
    }

    return true;
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

  //2. form onSubmit 에
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }

    //const token = localStorage.getItem("access_token");
    fetch("http://10.58.2.57:8000/account/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.history.push("/");
        } else if (!response.token) {
          //this.setState({
          //validateError:
          //"Sorry, this does not match our records. Check your spelling and try again.",
          //});
          alert("Invalid User");
        }
      });
  };

  goToSignup = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className="Login">
        <Header />
        <Nav />
        <div className="mainRow flexJustifyCenter">
          <div className="loginWrapper">
            <div className="loginBox">
              <h3 className="loginHeader upper">Sign in to your acocunt</h3>
              <p>
                If you already have a Rimowa account, please sign in. We'll use
                your existing details for a speedier checkout.
              </p>
              <form
                className="signInForm flexColumnCenter"
                onSubmit={this.handleSubmit}
              >
                <p className="showError">{this.state.validateError}</p>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address*"
                    value={this.state.email}
                    onChange={this.handleInput}
                  />
                  <p className="showError">{this.state.emailError}</p>
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
                  <p className="showError">{this.state.pwError}</p>
                </div>
                <button className="signinBtn" onClick={this.handleClick}>
                  Sign In
                </button>
              </form>
              <p className="forgotPW txtUpper">Forgotten your password?</p>
            </div>
          </div>
          <div className="signup">
            <div className="signupBox">
              <h3 className="signupHeader upper">Don't have an account?</h3>
              <p>Creating a RIMOWA account lets you:</p>
              <ul className="pitchLine">
                <li>ADD ITEMS TO YOUR WISHLIST</li>
                <li>GET PERSONALISED RECOMMENDATIONS</li>
                <li>CHECK OUT MORE QUICKLY</li>
                <li>TRACK YOUR ORDERS</li>
                <li>REGISTER MY RIMOWA</li>
              </ul>
              <form action="" className="signUpBtn">
                <button className="createAccBtn" onClick={this.goToSignup}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
