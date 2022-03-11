import React from 'react';
import './testimonials.scss';
import AVTR1 from '../../assets/about-me.JPG';
import AVTR2 from '../../assets/about-me.JPG';
import AVTR3 from '../../assets/about-me.JPG';
import AVTR4 from '../../assets/about-me.JPG';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const datas = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eoscupiditate dolore doloribus!',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eoscupiditate dolore doloribus!',
  },
  {
    avatar: AVTR3,
    name: 'Kwa Despite',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eoscupiditate dolore doloribus!',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eoscupiditate dolore doloribus!',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {datas.map((data, index) => (
          <SwiperSlide key={index} className='testimonials'>
            <div className='client__avatar'>
              <img src={data.avatar} alt='' />
            </div>
            <h5 className='client__name'>{data.name}</h5>
            <small className='client__review'>{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
