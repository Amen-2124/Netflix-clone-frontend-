import React, { useEffect, useState } from 'react'
import NetflixBanner from '../../assets/image/logo.png'
import {Play, Info} from 'lucide-react'
import styles from './Banner.module.css'
import {MovieInstance} from '../../Utility/MovieInstance'
import requests from '../../Utility/RequestUri'


const BANNER_BASE= "https://image.tmdb.org/t/p/original/"
function Banner() {
  const [bannerImage, setBannerImage] = useState({})

useEffect(() =>{
  async function fetchBannerImage(){
const request =await MovieInstance.get(requests.fetchNetflixOriginals)
setBannerImage(
  request.data.results[Math.floor(Math.random()*request.data.results.length)]
)
  }fetchBannerImage()
},[]) 
function truncate(str,n){
  return str?.length>n ? str.substr(0,n-1)+"...":str
}





  return (
    <div className={styles.banner}
    style={
      {backgroundSize :"cover",
backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}") `
      }
    }
    >
        <div className={styles.contents}>
            {/* Netflix image */}

            <img className={styles.logoImg} src={NetflixBanner} alt="NetflixBanner" />

            {/* title */}
            <h1 className={styles.title}>{bannerImage?.original_name}</h1>

            {/* description */}
           <h1 className={styles.description}> 
            {truncate(bannerImage?.overview,120)}
             </h1> 
            {/* buttons */}
            <div className={styles.buttonContainer}>
<button  className={styles.button}>
    <Play size={30}/>
    Play
    </button> 

    <button>

        <Info size={30}/> 
        my list
    </button>
            </div>
        </div>
        {/* fading */}
        <div  className={styles.fadeBottom}> </div>
    </div>
  )
}

export default Banner