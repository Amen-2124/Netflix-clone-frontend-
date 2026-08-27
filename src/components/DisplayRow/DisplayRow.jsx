import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRatedMovies: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixOriginalsRes,
        topRatedMoviesRes,
        actionMoviesRes,
        comedyMoviesRes,
        horrorMoviesRes,
        romanceMoviesRes,
        documentariesres,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);
      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixOriginalsRes.data.results,
        topRatedMovies: topRatedMoviesRes.data.results,
        actionMovies: actionMoviesRes.data.results,
        comedyMovies: comedyMoviesRes.data.results,
        horrorMovies: horrorMoviesRes.data.results,
        romanceMovies: romanceMoviesRes.data.results,
        documentaries: documentariesres.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRatedMovies} />
      <SlideShow title="Action" movies={movies.actionMovies} />
      <SlideShow title="Comedy" movies={movies.comedyMovies} />
      <SlideShow title="Horror" movies={movies.horrorMovies} />
      <SlideShow title="Romance" movies={movies.romanceMovies} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
