import React from "react";
import Home from "./containers/Home";
import Header from "./containers/Header";
import { Router, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Details from "./containers/Details";
import { routePaths } from "./constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles =  makeStyles(theme =>({
    appbar: {
      position: 'fixed', right:0, top:0, left:0, zIndex:1400
    },
    body: {
        marginTop:50,
    }
}));


const createHistory = require("history").createBrowserHistory;
const history = createHistory();

function App() {
  const classes = useStyles();

  return (
    <Router history={history}>
      <Grid container>
        <Grid item xs={12} className={classes.appbar}>
          <Route path={routePaths.defult} component={Header} />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <Route exact path={routePaths.home} component={Home} />
          <Route exact path={routePaths.defult} component={Home} />
          <Route path={routePaths.details} component={Details} />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
