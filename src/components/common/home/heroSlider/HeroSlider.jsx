import React from 'react';
// Images
import slider1 from '../../../../assets/hero_slider/slider1.avif';
import slider2 from '../../../../assets/hero_slider/slider2.avif';
import slider3 from '../../../../assets/hero_slider/slider3.avif';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './heroSlider.scss'

const HeroSlider = () => {
    return (
        <section className='hero_slider'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='slider_item'>
                        <img src={slider1} alt="slider_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="slider_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="slider_img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider1} alt="slider_img" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HeroSlider
