import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./Swiper.css";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SwiperPics({ profile }) {
  return (
    <>
      <Swiper pagination={true} className="swiper-container">
        {profile.images.map((image) => (
          <SwiperSlide key={image} className="swiper-slider">
            <img alt={`${profile.firstName} ${profile.lastName}`} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
