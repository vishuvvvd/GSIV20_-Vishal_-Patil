/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { isArray } from "lodash";
import { searchMovie } from "../../api";
import { routePaths } from "../../constants";

export default props => {
  const [searchvalue, setSearchValue] = useState(" ");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    searchMovie(searchvalue).then(res => setSearchData(res.results));
  }, [searchvalue.length]);

  const handleSearch = event => {
    let val = event.target.value;
    if (val.length > 1) setSearchValue(val);
  };
 
  const handleChangeInIP =(v) => {
    props.history.push(routePaths.details + "/" + v.id);
  }

  return (
    <React.Fragment>
      <Autocomplete
        size="small"
        className="teftFieldIP"
        id="free-solo-dialog-demo"
        options={isArray(searchData) && searchData}
        onChange={(e,v) => handleChangeInIP(v)}
        renderOption={option =>  option.title }
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            placeholder="Free solo dialog"
            variant="outlined"
            onChange={handleSearch}
          />
        )}
      />
    </React.Fragment>
  );
};
