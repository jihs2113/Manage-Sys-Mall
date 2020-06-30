import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
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
            </MuiThemeProvider>
            </Switch>
      </Router>
    );
  }
}

export default Routes;