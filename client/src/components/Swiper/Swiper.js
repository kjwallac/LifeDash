import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SwiperPics() {
  return (
    <>
      <Swiper pagination={true} className="mySwiper">
        <SwiperSlide><img src="https://images.pexels.com/photos/5637536/pexels-photo-5637536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/5637528/pexels-photo-5637528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/5637563/pexels-photo-5637563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
