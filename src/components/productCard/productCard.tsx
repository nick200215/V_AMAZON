import { Link } from "react-router-dom";
import RandomStarRating from "../../pages/productDetailPage/components/starRating";
import { Product } from "../../types/products";

export default function ProductCard({ products }: { products: Product }) {
  const { id, name, price, images } = products;
  return (
    <section className="w-[99%] flex my-3">
      <div className="w-full min-h-[200px] border border-solid border-[#F7F7F7] flex gap-3">
        <Link
          to={`/Amazon-Clone-Project/products/${id}`}
          className="xl:min-w-[20%] xl:max-w-[20%] xl:h-[270px] md:min-w-[25%] md:max-w-[25%] md:h-[200px] xs:min-w-[40%] xs:max-w-[40%] xs:h-[200px]"
        >
          <div className="relative pb-[100%]">
            <img
              src={images}
              alt=""
              className="absolute inset-0 w-full h-full p-2 box-border aspect-square"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-3">
          <Link
            to={`/Amazon-Clone-Project/products/${id}`}
            className="no-underline"
          >
            <h2 className="text-black hover:text-amber-800 xs:line-clamp-3">
              {name}
            </h2>
          </Link>

          <Link
            to={`/Amazon-Clone-Project/products/${id}`}
            className="no-underline"
          >
            <h2 className="text-black text-3xl font-bold">
              <sup className="font-light text-base">$</sup>
              {price}
            </h2>
          </Link>
          <div>
            <RandomStarRating />
          </div>
          <p>
            Delivery <span className="text-sm font-bold">Tue, Sep 12 </span>{" "}
          </p>
          <p className="text-sm">Ships to Georgia</p>
        </div>
      </div>
    </section>
  );
}
