import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import "./Hero.css";

import { useUserAuth } from "../../context/AuthContext";
import Slider from "../Slider/Slider";

const Hero = () => {
  const slideInfo = [
    {
      id: 1,
      title: "New Arrivals",
      text: "Summer Hot Collection",
      img: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      id: 2,
      title: "World-wide Platform",
      text: "Winter Collection",
      img: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      title: "Best E-commerce site",
      text: "Collection forever",

      img: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        {slideInfo.map((prod, index) => (
          <SwiperSlide key={index}>
            <Slider product={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
