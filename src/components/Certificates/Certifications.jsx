import React from 'react';
import './certifications.css';
import { Data } from './data'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Certifications = () => {
  return (
    <section id='certificates'>
      <h2>Certificates</h2>

      <Swiper
        className="certificates_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]} 
      >
        {Data.map(({ id, image }) => (
          <SwiperSlide className='certificate_card' key={id}>
            <img src={image} alt={`Certificate ${id}`} className='certificate_img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Certifications;
