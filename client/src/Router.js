import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Login from "./user/Login/Login";
import Signup from "./user/SignUp/SignUp";
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
                <Route exact path="/" component={App}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
            </MuiThemeProvider>
            </Switch>
      </Router>
    );
  }
}

export default Routes;