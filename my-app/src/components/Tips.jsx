import React, { useRef } from "react";
import slide1 from "../img/Tips/slide1.jpg";
import slide2 from "../img/Tips/slide2.jpg";
import slide3 from "../img/Tips/slide3.jpg";
import "../styles/Tips.sass";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tips = () => {
    const prevTipsRef = useRef(null);
    const nextTipsRef = useRef(null);
    const indicatorsRef = useRef(null);
  return (
    <div className="Tips">
      <h1>Tips & Tricks</h1>
      <div className="slider">
        <div className="slider-menu">
          <div className="controls">
            <div className="prev prevTips" ref={prevTipsRef}>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="next nextTips" ref={nextTipsRef}>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L8 8L1 15"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="indicators" ref={indicatorsRef}>
            <div className="indicator active">
              <div className="dot" />
            </div>
            <div className="indicator">
              <div className="dot" />
            </div>
            <div className="indicator">
              <div className="dot" />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          navigation={{
            nextEl: ".nextTips",
            prevEl: ".prevTips",
          }}
          pagination={{
            el: indicatorsRef.current,
            clickable: true,
            renderBullet: function (index, className) {
              return `<div class="${className}"><div class="dot"></div></div>`;
            },
          }}
          loop={true}
          initialSlide={1}
        >
          <SwiperSlide>
            <div className="swiperSlide">
                <img src={slide3} alt="" />
                <div className="info-block">
                    <h2>Make your cooking activity more fun with good setup</h2>
                    <p>20 jan 2020</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
                <img src={slide1} alt="" />
                <div className="info-block">
                    <h2>How to create a living room to love</h2>
                    <p>20 jan 2020</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
                <img src={slide2} alt="" />
                <div className="info-block">
                    <h2>Solution for clean look working space</h2>
                    <p>10 jan 2020</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
                <img src={slide3} alt="" />
                <div className="info-block">
                    <h2>Make your cooking activity more fun with good setup</h2>
                    <p>20 jan 2020</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperSlide">
                <img src={slide1} alt="" />
                <div className="info-block">
                    <h2>How to create a living room to love</h2>
                    <p>20 jan 2020</p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tips;
