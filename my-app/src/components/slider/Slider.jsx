import React, { useRef } from "react";
import slide1 from "../../img/slide1.png";
import slide2 from "../../img/slide2.png";
import slide3 from "../../img/slide3.png";
import "./slider.sass";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  const prevHeaderRef = useRef(null);
  const nextHeaderRef = useRef(null);
  const indicatorsRef = useRef(null);

  return (
    <div className="MySlider">
      <div className="slider-menu">
        <div className="indicators" ref={indicatorsRef}>
          <div className="indicator"><div className="dot"/></div>
          <div className="indicator active"><div className="dot"/></div>
          <div className="indicator"><div className="dot"/></div>
        </div>
        <div className="controls">
          <div className="prev prevHeader" ref={prevHeaderRef}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L1 8L8 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="next nextHeader" ref={nextHeaderRef}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="swiperSlider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".nextHeader",
            prevEl: ".prevHeader"
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
        //   preloadImages={true}  // Загрузка изображений заранее
        //   watchSlidesVisibility={true} // Следить за видимостью слайдов
        //   loopAdditionalSlides={3} // Загрузка дополнительных слайдов для цикла
            >
          <SwiperSlide>
            <div className="slideInSlider">
                <img src={slide1} alt="" />
                <div className="slide-info">
                    <h1>Bohauss</h1>
                    <p>Luxury big sofa 2-seat</p>
                    <div className="arrow">
                        <h2>Rp 17.000.000</h2>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3653 6.56003L10.3853 11.56C10.2253 11.72 10.0253 11.8 9.82527 11.8C9.62527 11.8 9.42527 11.72 9.26527 11.56C8.94527 11.24 8.94527 10.74 9.26527 10.42L12.8853 6.78003H1.20527C0.765273 6.78003 0.405273 6.42003 0.405273 5.98003C0.405273 5.54003 0.765273 5.18003 1.20527 5.18003H12.8853L9.26527 1.54004C8.94527 1.22004 8.94527 0.720034 9.26527 0.400034C9.58527 0.0800342 10.0853 0.0800342 10.4053 0.400034L15.3853 5.40003C15.6853 5.74003 15.6853 6.26003 15.3653 6.56003Z" fill="black"/>
                        </svg>    
                    </div>
                </div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className="slideInSlider">
                <img src={slide2} alt="" />
                <div className="slide-info">
                    <h1>Bohauss</h1>
                    <p>Luxury big sofa 2-seat</p>
                    <div className="arrow">
                        <h2>Rp 17.000.000</h2>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3653 6.56003L10.3853 11.56C10.2253 11.72 10.0253 11.8 9.82527 11.8C9.62527 11.8 9.42527 11.72 9.26527 11.56C8.94527 11.24 8.94527 10.74 9.26527 10.42L12.8853 6.78003H1.20527C0.765273 6.78003 0.405273 6.42003 0.405273 5.98003C0.405273 5.54003 0.765273 5.18003 1.20527 5.18003H12.8853L9.26527 1.54004C8.94527 1.22004 8.94527 0.720034 9.26527 0.400034C9.58527 0.0800342 10.0853 0.0800342 10.4053 0.400034L15.3853 5.40003C15.6853 5.74003 15.6853 6.26003 15.3653 6.56003Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className="slideInSlider">
                <img src={slide3} alt="" />
                <div className="slide-info">
                    <h1>Bohauss</h1>
                    <p>Luxury big sofa 2-seat</p>
                    <div className="arrow">
                        <h2>Rp 17.000.000</h2>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3653 6.56003L10.3853 11.56C10.2253 11.72 10.0253 11.8 9.82527 11.8C9.62527 11.8 9.42527 11.72 9.26527 11.56C8.94527 11.24 8.94527 10.74 9.26527 10.42L12.8853 6.78003H1.20527C0.765273 6.78003 0.405273 6.42003 0.405273 5.98003C0.405273 5.54003 0.765273 5.18003 1.20527 5.18003H12.8853L9.26527 1.54004C8.94527 1.22004 8.94527 0.720034 9.26527 0.400034C9.58527 0.0800342 10.0853 0.0800342 10.4053 0.400034L15.3853 5.40003C15.6853 5.74003 15.6853 6.26003 15.3653 6.56003Z" fill="black"/>
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

export default Slider;
