import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "./testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className='sliderContainer'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p>
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <h3>Name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p>
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <h3>Name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p>
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <h3>Name</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p>
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <h3>Name</h3>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
