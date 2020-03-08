import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import { routePaths } from "../../constants"
import { searchMovie } from "../../api"
import AutoComplete from "../AutoComplete"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#9b9b9b", 0.15),
    "&:hover": {
      backgroundColor: fade("#9b9b9b", 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width:'100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default props => {
  const classes = useStyles();
  const handleHomeRoute = () => {
    props.routes.push(routePaths.home)
  }

  searchMovie("lol").then(res => console.log(res))
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          {props.deatils && (
            <Typography variant="h6" noWrap>
              Movie Detials
            </Typography>
          )}
          {props.searchbar && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              {/* <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              /> */}
              <AutoComplete />
            </div>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton onClick={handleHomeRoute} aria-label="show 4 new mails" color="inherit">
              <Home />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton onClick={handleHomeRoute} aria-label="show 4 new mails" color="inherit">
              <Home />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
