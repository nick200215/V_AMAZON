import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { getCartItem, removeCartItem } from "../../features/userSlice";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/img/emptyCart.webp";

const ProductCart = () => {
  const dispatch = useAppDispatch();

  const { isError, isLoading, isLoaded, data } = useAppSelector(
    (state) => state.user.cartItems
  );

  const items = data;
  const cartAmount = Object.values(items).length;

  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  // Calculate subtotal
  const subtotal = Object.values(data).reduce((total, item) => {
    return total + item.price;
  }, 0);

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isLoaded && Object.keys(data).length === 0) {
    return (
      <div className="flex items-center justify-center my-10">
        <div className="text-center">
          <img
            src={emptyCart}
            alt="No Product Found"
            className="w-4/6 h-4/6 mx-auto mb-4"
          />
          <p className="text-2xl text-gray-600">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300 flex  justify-center ">
      <div className="w-[98%] xl:flex xl:flex-row md:flex md:flex-col-reverse xs:flex xs:flex-col-reverse justify-between my-4">
        <div className="xl:w-[80%] md:w-full xs:w-full bg-white  p-5">
          <h1 className="xl:flex md:hidden xs:hidden text-2xl font-semibold border-b pb-1 opacity-80">
            {" "}
            Shopping Cart
          </h1>
          <div className="flex flex-col gap-5">
            {Object.values(data).map((item) => (
              <div className="border-b pb-5 flex gap-5 xl:p-8 md:p-2 xs:p-2">
                <div
                  className=" xl:min-w-[180px] xl:max-w-[180px] xl:max-h-[200px] xl:min-h-[200px]
                md:max-w-[120px] md:min-w-[120px] md:max-h-[150px] md:min-h-[150px]
                xs:max-w-[120px] xs:min-w-[120px] xs:max-h-[150px] xs:min-h-[150px]  "
                >
                  <Link to={`/Amazon-Clone-Project/products/${item.id}`}>
                    <img src={item.images} alt="" className="w-full h-full " />
                  </Link>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/Amazon-Clone-Project/products/${item.id}`}
                      className="xs:line-clamp-3"
                    >
                      <h2>{item.name}</h2>
                    </Link>
                    <Link to={`/products/${item.id}`}>
                      <p className="text-2xl font-bold">${item.price}</p>
                    </Link>
                    <p className="text-green-600 text-sm font-medium">
                      in stock
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(removeCartItem(item.id))}
                      className="text-amazon-link hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <h2 className=" mt-2 font-medium text-xl ">
              Subtotal ({cartAmount} items):{" "}
              <span className="font-bold "> ${subtotal.toFixed(2)} </span>
            </h2>{" "}
          </div>
        </div>
        <div className="bg-white xl:w-[19%] md:w-full xs:w-full  h-[20%] md:border-b-2 md:border-amazon-buttonhover xs:border-b-2 xs:border-amazon-buttonhover ">
          <div className="m-4 flex flex-col gap-7">
            <div className="flex items-center text-lg md:border-b md:border-amazon-button xs:border-b xs:border-amazon-button">
              <h2 className=" mt-2 font-normal ">
                Subtotal ({cartAmount} items):{" "}
                <span className="font-bold "> ${subtotal.toFixed(2)} </span>
              </h2>
            </div>
            <Link
              to={"/Amazon-Clone-Project/payment"}
              className="bg-amazon-button hover:bg-amazon-buttonhover text-center text-sm rounded-lg py-2 px-4 mb-10"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
