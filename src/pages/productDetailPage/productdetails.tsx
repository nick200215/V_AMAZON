import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { useEffect } from "react";

import { getProductById } from "../../features/productSlice";
import BackToResult from "./components/BackToResult";
import MainSwiper from "./components/swiper/mainSwiper";
import ProductInfo from "./components/productInfo";
import RightComponent from "./components/rightComponent";
import MobileSwiper from "./components/swiper/mobileSwiper";

const ProductById = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.products.data[id]);

  useEffect(() => {
    if (!product) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id, product]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[98%] flex flex-col gap-5">
        <div className="xl:flex md:hidden xs:hidden">
          <BackToResult data={product} isLoading={!product} />
        </div>

        <div className="xl:flex xl:gap-5 md:flex-row xs:flex-row">
          <div>
            {product && (
              <div className="xl:flex md:hidden xs:hidden">
                <MainSwiper data={product} isLoading={!product} />
              </div>
            )}
            {product && (
              <div className="xl:hidden md:flex xs:flex">
                <MobileSwiper data={product} isLoading={!product} />
              </div>
            )}
          </div>
          <div>
            <ProductInfo data={product} isLoading={!product} />
          </div>

          <div>
            <RightComponent data={product} isLoading={!product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
