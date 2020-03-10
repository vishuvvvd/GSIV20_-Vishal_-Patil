import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from "react-redux"

import AllMovies from "../components/AllMovies";
import { GET_POPULAR_MOVIES } from "../stores/moviesReducer";

function NewsInfiniteLoader(props) {
  const [pageIndex, setPageIndex] = useState(1);
  const hasMoreNews = pageIndex <= 500;
  const dispatch = useDispatch()
  const moviesData = useSelector( state => state.moviesReducer.popularMovies)

  const loadMoreNews = pageIndex => {
    setPageIndex(pageIndex + 1)
    dispatch({type: GET_POPULAR_MOVIES, payload: pageIndex})
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
