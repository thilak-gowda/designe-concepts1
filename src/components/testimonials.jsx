import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
      <div className="container">


        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-secondary swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-secondary swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-secondary swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-secondary swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-secondary swip-alig">
            <div className="testimonial">
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore laborum pariatur ducimus deleniti aliquam quasi cupiditate, odio sequi amet ipsam tempora mollitia molestiae vel saepe iure repellat earum quia.
              </p>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
}
