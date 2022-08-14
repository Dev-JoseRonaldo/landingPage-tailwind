import { SwiperSlide } from "swiper/react"

import { Carousel } from "../../carousel"

import { carouselFeatured } from "../../../carousel-mock.json"

export const FeaturedCarousel = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: carouselFeatured.length < 3 ? carouselFeatured : 3,
    navigation: carouselFeatured.length > 3,
    pagination: {
      clickable: true,
    },
    loop: carouselFeatured.length >=3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  }

  return (
    <Carousel settings={settings}>
    {carouselFeatured.map((card)=>(
        <SwiperSlide key={card.id}>
          <img src={card.img} alt="" />       
        </SwiperSlide>         
      ))}
    </Carousel>
  )
}
