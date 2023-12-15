import React from "react";
import { Link } from "react-router-dom";
// import { Product } from "../../../types/products";

interface ProductItemProps {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { oldPrice, newPrice, images, image, price, name, id } = product;

  const calculateDiscount = () => {
    if (oldPrice && newPrice) {
      const discount = ((oldPrice - newPrice) / oldPrice) * 100;
      return `${discount.toFixed(0)}% off`;
    }
    return "";
  };

  return (
    <div className="product-item p-4 h-[400px] transition duration-300">
      <div className="flex flex-col justify-between h-full">
        <div className="h-[75%] xl:px-10 md:px-10 xs:px-1 xl:py-5 md:py-5 xs:py-1 bg-slate-100">
          <Link
            to={`/Amazon-Clone-Project/products/${id}`}
            className="no-underline"
          >
            <img
              srcSet={Array.isArray(images) ? images.join(", ") : image}
              sizes="(max-width: 600px) 100px, (max-width: 1200px) 200px, 400px"
              src={Array.isArray(images) ? images[0] : image}
              alt=""
              className="w-full h-full"
            />
          </Link>
        </div>
        <Link
          to={`/Amazon-Clone-Project/products/${id}`}
          className="no-underline"
        >
          {oldPrice && newPrice ? (
            <div className="flex gap-5">
              <p className="text-white bg-red-600 w-1/4 p-1 pl-[5px] text-xs">
                {calculateDiscount()}
              </p>
              <p className="text-red-600">deal</p>
            </div>
          ) : null}
          <div className="flex gap-2 items-center">
            {oldPrice && newPrice ? (
              <>
                <p>${newPrice}</p>
                <del className="opacity-50 text-xs">List Price ${oldPrice}</del>
              </>
            ) : (
              <p className="text-xl font-bold">${price}</p>
            )}
          </div>
        </Link>

        <Link
          to={`/Amazon-Clone-Project/products/${id}`}
          className="no-underline"
        >
          <h3 className="text-sm mb-2 line-clamp-1">{name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
