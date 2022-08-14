import { SwiperSlide } from "swiper/react"

import { Carousel } from "../../carousel"
import './styles.css'

import { carouselPopularPick } from "../../../carousel-mock.json"

export const PopularPickCarousel = () => {
  const settings = {
    spaceBetween: 24,
    slidesPerView: carouselPopularPick.length < 3.5 ? carouselPopularPick : 3.5,
    navigation: carouselPopularPick.length > 3.5,
    /*
    pagination: {
      clickable: true,
    },
    loop: carouselPopularPick.length >= 3.5,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
    */
  }

  return (
    <>
      <Carousel settings={settings}>         
        {carouselPopularPick.map((card)=>(
          <SwiperSlide key={card.id}>
            <img src={card.img} alt="" />       
          </SwiperSlide>         
        ))}
      </Carousel>
    </>
  )
}
