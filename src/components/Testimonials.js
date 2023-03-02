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
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <div className='sliderContainer'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        pagination={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: true,
        }}
        scrollbar={{ draggable: true }}
        className='mySwiper'
      >
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p className="testimonialText">
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <p className="testimonialName">Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p className="testimonialText">
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <p className="testimonialName">Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p className="testimonialText">
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <p className="testimonialName">Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p className="testimonialText">
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <p className="testimonialName">Name</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonySLider'>
          <div className='testimonyContainer'>
            <img
              src={require("./images/dani1.png")}
              className='testimonyImage'
              alt='name of the first testimony'
            />

            <p className="testimonialText">
              Testimony. Some words would fit here lorem ipsum something
              something something.
            </p>
            <p className="testimonialName">Name</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
