import React, { useRef } from "react";
import "../styles/Inspirations.sass";
import slide1 from "../img/inspirations/slide1.jpg";
import slide2 from "../img/inspirations/slide2.jpg";
import slide3 from "../img/inspirations/slide3.jpg";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Inspirations = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const indicatorsRef = useRef(null);

  return (
    <div className="Inspirations">
      <div className="text-block">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className="slider">
        <div className="slider-menu">
          <div className="controls">
            <div className="prev prevInspirations" ref={prevRef}>
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
            <div className="next nextInspirations" ref={nextRef}>
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
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            nextEl: ".nextInspirations",
            prevEl: ".prevInspirations",
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
            <div className="slideInSlider">
              <img src={slide1} alt="" />
              <div className="slide-info">
                <div className="text-block">
                  <p>
                    01 <div className="line" /> Bed Room
                  </p>
                  <h1>Inner Peace</h1>
                </div>
                <div className="arrow">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7H1M19 7L13 1M19 7L13 13"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideInSlider">
              <img src={slide2} alt="" />
              <div className="slide-info">
                <div className="text-block">
                  <p>
                    01 <div className="line" /> Bed Room
                  </p>
                  <h1>Inner Peace</h1>
                </div>
                <div className="arrow">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7H1M19 7L13 1M19 7L13 13"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideInSlider">
              <img src={slide3} alt="" />
              <div className="slide-info">
                <div className="text-block">
                  <p>
                    01 <div className="line" /> Bed Room
                  </p>
                  <h1>Inner Peace</h1>
                </div>
                <div className="arrow">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7H1M19 7L13 1M19 7L13 13"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Inspirations;
