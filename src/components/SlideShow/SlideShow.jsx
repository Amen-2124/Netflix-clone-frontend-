import React from 'react';
import styles from './SlideShow.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.1}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 6,
            },
            480: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView:4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5.1,
              spaceBetween: 100,
            },
          
          }}
        >
          {/* Array.isArray */}
          {Array.isArray(movies) && movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
