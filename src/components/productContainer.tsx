import ProductCard from "./productCard/productCard";
import { TheFilter } from "./theFillter/theFilter";
import noProduct from "../assets/img/nproduct.png";
import { Product } from "../types/products";

type Props = {
  isLoading: boolean;
  data: Product[];
};

export const ProductsContainer = ({ data, isLoading }: Props) => {
  if (isLoading) return <h1>Loading...</h1>;

  if (!data.length) {
    return (
      <div className="flex items-center justify-center ">
        <div className="text-center">
          <img
            src={noProduct}
            alt="No Product Found"
            className="w-4/6 h-4/6 mx-auto mb-4"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-5">
      <div className="flex gap-4 w-[99%] xs:justify-center">
        <div className="w-[20%] h-[400px] xl:flex md:flex xs:hidden">
          <TheFilter />
        </div>

        <div className="xl:w-[80%] xs:w-[99%] xs:justify-center mt-5">
          <div className="xl:hidden md:hidden xs:flex">
            <TheFilter />
          </div>
          <h1 className="text-2xl font-bold">Result</h1>
          <div className="xs:justify-center">
            {data.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
