import React from "react";
import { useState, useEffect } from "react";
import netflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { MovieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/RequestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await MovieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);
  // console.log(bannerImage)

  return (
    <div
      className={styles.Banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src="NetflixBannerLogo"
          alt="NetFlix logo"
        />
        {/* title */}
        <h1 className={styles.title}>{bannerImage?.original_name}</h1>
        {/* description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>
        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}
//import { Form } from "react-router-dom";

export default Banner;
