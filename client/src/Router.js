import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
import Main from "./main/Main";
import UniqueTag from "./main/UniqueTag";
import ProductList from "./luggage/ProductList";
import AccList from "./accessories/AccList";
import StoreLocator from "./storeLocator/StoreLocator";
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans KR", serif',
    }
  })

class Routes extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <MuiThemeProvider theme={theme}>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/customer" component={App}></Route>
                <Route exact path="/uniquetag" component={UniqueTag}></Route>
                <Route exact path="/productList" component={ProductList}></Route>
                <Route exact path="/accList" component={AccList}></Route>
                <Route exact path="/locator" component={StoreLocator}></Route>

            </MuiThemeProvider>
            </Switch>
      </Router>
    );
  }
}

export default Routes;