'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Scrollbar,
  EffectFade,
  Autoplay
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'


export default function SwiperCarousel() {
  return (
    <div className=' w-full'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        effect='fade'
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[EffectFade, Scrollbar, Autoplay]}
      >
        <SwiperSlide>
          <img src='/images/banner-1.jpg' alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/banner-2.jpg' alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/banner-3.jpg' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
