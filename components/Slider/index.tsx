import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@material-ui/core';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import useStyles from './styles';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { sliderData, SlideItemType } from '../../constants/data';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Slider() {
  const classes = useStyles();

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleChange = (swiper: any) => {
    setCurrentIndex(swiper.snapIndex);
  };

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>
        Information about the current price
      </Typography>
      <div className={classes.sliderContMY}>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 5,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={handleChange}
          initialSlide={currentIndex}
          loop
          loopedSlides={8}
          autoplay={{ delay: 3000 }}
        >
          {sliderData.map((slide: SlideItemType) => (
            <SwiperSlide key={slide.id}>
              <div className={classes.onSlider}>
                <div className={classes.sliderItem}>
                  <img className={classes.image} src={`slides/slide${slide.id}.jpg`} alt="cat" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classes.pagination}>
          {sliderData.map((slide: SlideItemType, index: Number) => (
            <div
              key={slide.id}
              className={
                currentIndex % 8 === index
                  ? classes.paginationItemActive
                  : classes.paginationItem
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
