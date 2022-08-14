import { Swiper } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay} from "swiper"

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/effect-fade';

export const Carousel = ({ settings, children }) => {
  return (
    <Swiper modules={[ Navigation, Pagination, A11y, Autoplay ]} {...settings}>
      { children }
    </Swiper>
  )
}
