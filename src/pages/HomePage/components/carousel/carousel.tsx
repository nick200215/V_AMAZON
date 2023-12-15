import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Products } from "../../../../types/CategoriesResponse";
import Slide1 from "../../../../assets/img/carousel-slider-1.jpg";
import Slide2 from "../../../../assets/img/carousel-slider-2.jpg";
import Slide3 from "../../../../assets/img/carousel-slider-3.jpg";
import "./carouselArrow.scss";

interface ProductCarouselProps {
  products: Products[];
}

const carouselSlides = [Slide1, Slide2, Slide3];

const Carousel: React.FC<ProductCarouselProps> = () => {
  const swiperParams = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: true,
    slidesPerView: 1,
    loop: true,
    modules: [Navigation, Autoplay],
    className: "mySwiper arrowSwiper w-full flex justify-center align-middle",
  };

  return (
    <Swiper {...swiperParams}>
      {carouselSlides.map((image, index) => (
        <SwiperSlide key={index} className="w-full bg-black">
          <img src={image} alt={`Slide ${index}`} width="1920" height="1080" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
