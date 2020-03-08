import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import LinearProgress from '@material-ui/core/LinearProgress';

import { getPopular } from "../api";
import AllMovies from "../components/AllMovies";

function NewsInfiniteLoader(props) {
  const [pageIndex, setPageIndex] = useState(1);
  const hasMoreNews = pageIndex <= 500;
  const [moviesData, setMoviesData] = useState(1);

  useEffect(() => {
    getPopular("1").then(res => {
      setMoviesData(res.results);
      setPageIndex(pageIndex);
      return res.results;
    });
  }, []);

  const loadMoreNews = pageIndex => {
    getPopular(pageIndex).then(res => {
      setMoviesData([...moviesData, ...res.results]);
    });
  };

  return (
    <InfiniteScroll
      pageStart={pageIndex}
      loadMore={loadMoreNews}
      initialLoad={false}
      hasMore={hasMoreNews}
      loader={<h3 key={new Date().getTime()}><LinearProgress /></h3>}
    >
      <AllMovies history={props.history} movies={moviesData} />
    </InfiniteScroll>
  );
}

export default NewsInfiniteLoader;
