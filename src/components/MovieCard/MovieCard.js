import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Grid } from "@material-ui/core";

import useStyles from "./MovieCardStyle"

export default props => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title={props.imageAlt}
        />
        <CardContent>
          <Grid container>
            <Grid item xs>
              <Typography variant="h6" className={classes.title}>{props.movieTitle}</Typography>
            </Grid>
            <Grid item>
              <Rating
                size={"small"}
                name="read-only"
                value={props.rating}
                readOnly
              />
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.maxLines}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
