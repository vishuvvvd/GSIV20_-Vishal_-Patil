import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  arrowContainer: {
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    cursor: "pointer",
    minHeight:300,
  },
  latestMovieContainer: {
    display: "flex",
    width: "100%",
    overflowX: "auto"
  },
  cardContainer: {
   padding: '0 10px'
  },
  homeFirstRow: {
    position: "relative",
  },
  backArrow: {
    zIndex:2,
  },
  forwardArrow: {
    zIndex:2
  },
  allMovies:{
    padding:'20px 0'
  }
});
