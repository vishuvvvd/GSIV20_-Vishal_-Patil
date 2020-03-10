import React from "react";
import { Grid } from "@material-ui/core";


import useStyles from "./homeStyle";
import LatestMovies from "../../components/LatestMovies"
import Infy from "../infiniteScroll"

export default props => {
  const classes = useStyles();
  return (
    <div>
    <Grid direction={"row"} container>
      <Grid item xs={12} className={classes.movieContainer}>
        <LatestMovies history={props.history}/>
      </Grid>
      <Grid item xs={12} className={classes.movieContainer}>
        <Infy history={props.history}/>
      </Grid>
    </Grid>
  </div>
  );
};
