import React, { useRef, useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid, Typography } from "@material-ui/core";
import { isArray } from "lodash";

import useStyles from "./LatestMoviesStyle";
import { routePaths } from "../../constants";
import Card from "../../components/MovieCard";
import { getUpcoming } from "../../api";
import { imageBaseURL } from "../../constants";

export default props => {
  const classes = useStyles();
  const scroll = useRef();
  const [upcoming, setUpcoming] = useState();

  const scrollLeft = () => {
    document.getElementById("slider-container").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("slider-container").scrollLeft += 200;
  };

  const handleCardDetails = (id) => {
    props.history.push(routePaths.details+"/"+id);
  };

  useEffect(() => {
    getUpcoming().then(res => setUpcoming(res.results));
  }, []);

  return (
    <>
      <Typography variant="h5" component="h6">
        Upcoming Movies
      </Typography>
      <div className={[classes.homeFirstRow, "horizontalscroll"].join(" ")}>
        <div
          id="slider-container"
          ref={scroll}
          className={classes.latestMovieContainer}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.arrowContainer}
          >
            <Grid item className={classes.backArrow} onClick={scrollLeft}>
              {" "}
              <ArrowBackIosIcon fontSize="large" />{" "}
            </Grid>
            <Grid item className={classes.forwardArrow} onClick={scrollRight}>
              <ArrowForwardIosIcon fontSize="large" />
            </Grid>
          </Grid>
          {isArray(upcoming) &&
            upcoming.map((movie, key) => (
              <div className={classes.cardContainer} key={key}>
                <Card
                  onClick={() => handleCardDetails(movie.id)}
                  imageUrl={`${imageBaseURL}${movie.poster_path}`}
                  imageAlt={movie.title}
                  movieTitle={movie.title}
                  description={movie.overview}
                  rating={3}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
