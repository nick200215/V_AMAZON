import { lazy, useEffect, useState } from "react";
import { getDemandProducts } from "../../services/getDemandProducts";
import { getLatestProducts } from "../../services/getLatestProducts";
import { getOffers } from "../../services/getOffers";
import { Products } from "../../types/CategoriesResponse";

const ProductSlider = lazy(() => import("./components/ProductSwiper"));
const Carousel = lazy(() => import("./components/carousel/carousel"));

const HomePage = () => {
  const [offers, setOffers] = useState<Products[]>([]);
  const [demandProducts, setDemandProducts] = useState<Products[]>([]);
  const [latestProducts, setLatestProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offersResponse = await getOffers();
        const demandProductsResponse = await getDemandProducts();
        const latestProductsResponse = await getLatestProducts();

        setOffers(offersResponse.data);
        setDemandProducts(demandProductsResponse.data);
        setLatestProducts(latestProductsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 relative">
      <div>
        <Carousel products={latestProducts} />
      </div>
      <div>
        <ProductSlider
          products={demandProducts}
          productsTitle="Most Demand Products"
        />
        <ProductSlider products={offers} productsTitle="Offers" />
        <ProductSlider
          products={latestProducts}
          productsTitle="Latest Products"
        />
      </div>
    </div>
  );
};

export default HomePage;
