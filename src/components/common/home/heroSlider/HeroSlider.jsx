import React, { useRef } from 'react';
// Components
import Layout from '../../../layout/Layout';
// Icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
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
    const swiperRef = useRef();
    return (
        <Layout>
            <section className='hero_slider'>
                <div className='slider_btn left' onClick={() => swiperRef.current.slidePrev()}>
                    <RiArrowLeftSLine />
                </div>
                <Swiper
                    onReachBeginning={() => { console.log('slide start') }}
                    onReachEnd={() => { console.log('slide end') }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                >
                    <SwiperSlide>
                        <div className='slider_item'>
                            <img src={slider2} alt="slider_img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_item'>
                            <img src={slider1} alt="slider_img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_item'>
                            <img src={slider3} alt="slider_img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider_item'>
                            <img src={slider2} alt="slider_img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='slider_btn right' onClick={() => swiperRef.current.slideNext()}>
                    <RiArrowRightSLine />
                </div>
            </section>
        </Layout>
    )
}

export default HeroSlider
