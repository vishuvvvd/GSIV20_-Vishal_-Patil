/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { isArray } from "lodash";
import { searchMovie } from "../../api";
import { routePaths } from "../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      paddingLeft: 30
    }
  }
}));


export default props => {
  const classes = useStyles();
  const [searchvalue, setSearchValue] = useState(" ");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    searchMovie(searchvalue).then(res => setSearchData(res.results));
  }, [searchvalue.length]);

  const handleSearch = event => {
    let val = event.target.value;
    if (val.length > 1) setSearchValue(val);
  };
  const handleCardDetails = id => {
    props.history.push(routePaths.details + "/" + id);
  };

  return (
    <React.Fragment>
      <Autocomplete
        size="small"
        id="free-solo-dialog-demo"
        options={isArray(searchData) && searchData}
        renderOption={option => {
          return (
            option.title !== undefined && (
              <span
                onClick={e => handleCardDetails(option.id)}
                style={{ paddingLeft: 10 }}
              >
                {" "}
                {option.title}{" "}
              </span>
            )
          );
        }}
        style={{ width: "100%" }}
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            classes={{ root: classes.root }}
            placeholder="Free solo dialog"
            variant="outlined"
            onChange={handleSearch}
            autoComplete="off"
          />
        )}
      />
    </React.Fragment>
  );
};
