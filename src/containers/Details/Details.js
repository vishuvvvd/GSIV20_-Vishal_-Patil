import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./DetailsStyle";
import { getMovieDetails } from "../../api";
import { imageBaseURL } from "../../constants";

export default props => {
  const classes = useStyles();
  const details = props.history;
  const [movieDetails, setMovieDetails] = useState({});

  var detailsnumber = details.location.pathname.substring(
    details.location.pathname.lastIndexOf("/") + 1,
    details.location.pathname.length
  );
  useEffect(() => {
    getMovieDetails(detailsnumber).then(res => setMovieDetails(res.data));
  }, []);

  const getReleaseyear = date => {
    if (date !== undefined) {
      let dt = new Date(date);
      return dt.getFullYear();
    } else {
      return;
    }
  };

  console.log(movieDetails)
  return (
    movieDetails !== undefined && (
      <Grid container className={classes.detailsContainer}>
        <Grid item xs={2}>
          <img
            src={`${imageBaseURL}${movieDetails.poster_path}`}
            alt=""
            className={classes.detailsPoster}
          />
        </Grid>
        <Grid item xs={10} className={classes.movieInfo}>
          <Grid container direction={"column"} spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems={"flex-end"}>
                <Grid item>
                  <Typography variant="h5"> {movieDetails.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography> (movieDetails.vote_average) </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography component="span">
                {" "}
                {getReleaseyear(movieDetails.release_date)}
              </Typography>
              <Typography component="span">
                {" "}
                | {movieDetails.runtime}
              </Typography>
              <Typography component="span">| {movieDetails.tagline}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="span">Cast : </Typography>
              <Typography component="span">a</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{movieDetails.overview}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  );
};
