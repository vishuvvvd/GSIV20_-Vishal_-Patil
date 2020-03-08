import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { isArray } from "lodash"

import Card from "../MovieCard";
import useStyles from "./AllmoviesStyle";
import { routePaths } from "../../constants";
import { imageBaseURL } from "../../constants"

export default props => {
  const classes = useStyles();
  const movies = props.movies

  const handleCardDetails = (id) => {
    props.history.push(routePaths.details+"/"+id);
  };
  return (
    <>
      <Typography variant="h5" component="h6">
        All Movies
      </Typography>
      <div className={[classes.homeFirstRow, "horizontalscroll"].join(" ")}>
        <Grid container>
          { isArray(movies) && movies.map((movie, key) =>
          
          <Grid item xs={4} key={key} className={classes.cardContainer}>
          <Card
              onClick={() => handleCardDetails(movie.id)}
              imageUrl={`${imageBaseURL}${movie.poster_path}`}
              imageAlt={movie.poster_path}
              movieTitle={movie.title}
              description={movie.overview}
              rating={movie.vote_average/2}
            />
          </Grid>
         
          )}
        </Grid>
      </div>
    </>
  );
};
