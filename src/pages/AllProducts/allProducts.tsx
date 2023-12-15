import ProductCard from "../../components/productCard/productCard";
import { Product } from "../../types/products";
import noProduct from "../../assets/img/nproduct.png";

type Props = {
  isLoading: boolean;
  data: Product[];
};

export const AllProducts = ({ data, isLoading }: Props) => {
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
    <div className="flex justify-center">
      <div className="flex gap-4 w-[99%] xs:justify-center">
        <div className="xl:w-[80%] xs:w-[99%]  xs:justify-center">
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
