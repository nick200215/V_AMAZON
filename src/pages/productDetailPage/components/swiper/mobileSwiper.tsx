import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data?: Product;
  isLoading: boolean;
}

const MobileSwiper = ({ data, isLoading }: Props) => {
  if (!data && !isLoading) {
    return <h1>No products found</h1>;
  }

  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        slidesPerView={1}
        modules={[Pagination]}
        className="w-72"
      >
        {data?.images.map(
          (
            image: string,
            index: number // Specify types for image and index
          ) => (
            <SwiperSlide key={index} className="pb-5 w-full">
              <img src={image} alt="" className="w-full" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default MobileSwiper;
