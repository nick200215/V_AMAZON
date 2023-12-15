import React, { lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductItem = lazy(() => import("./SlideCard"));
import { Products } from "../../../types/CategoriesResponse";

import "./productSlider.scss";

interface ProductSliderProps {
  products: Products[];
  productsTitle: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  productsTitle,
}) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="product-slider flex justify-center pb-16 pt-16">
      <div className="w-[95%] h-[500px] bg-white p-5">
        <h1 className="text-2xl font-bold text-slate-400">{productsTitle}</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSlider;
