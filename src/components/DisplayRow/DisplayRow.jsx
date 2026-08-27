import React, { useState, useEffect } from 'react';
import styles from './DisplayRow.module.css';
import SlideShow from '../SlideShow/SlideShow';
import requests from "../../Utility/RequestUri.js";
import { MovieInstance } from '../../Utility/MovieInstance.js';

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: []
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        documentariesRes
      ] = await Promise.all([
        MovieInstance.get(requests.fetchTrending),
        MovieInstance.get(requests.fetchNetflixOriginals),
        MovieInstance.get(requests.fetchTopRatedMovies),
        MovieInstance.get(requests.fetchActionMovies),
        MovieInstance.get(requests.fetchComedyMovies),
        MovieInstance.get(requests.fetchHorrorMovies),
        MovieInstance.get(requests.fetchRomanceMovies),
        MovieInstance.get(requests.fetchDocumentaries)
      ]);

      setMovies({
        trending: trendingRes.data.results, 
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: documentariesRes.data.results
      });
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Trending Now" movies={movies.trending} />
      <SlideShow title="Netflix Originals" movies={movies.netflixOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Horror Movies" movies={movies.horror} />
    
    </div>
  );
}

export default DisplayRow;