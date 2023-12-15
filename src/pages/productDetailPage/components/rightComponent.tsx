import {
  handleAddProduct,
  handleRemoveOptimisticProduct,
} from "../../../features/userSlice";
import { addToCart } from "../../../services/cart/addToCart";
import { useAppDispatch } from "../../../types/hooks";
import { Product } from "../../../types/products";

interface Props {
  data?: Product;
  isLoading: boolean;
}

const RightComponent = ({ data, isLoading }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    if (data) {
      try {
        dispatch(handleAddProduct(data)); // redux
        await addToCart(data); // promise
      } catch (error: any) {
        dispatch(handleRemoveOptimisticProduct(data.id));
        if (error.response && error.response.status === 401) {
          // Remove from redux
        }
      }
    }
  };

  if (!data && !isLoading) {
    return <h1>No products found</h1>;
  }

  return (
    <div className="xs:flex xs:justify-center">
      <div className="xl:w-[250px] md:w-[99%] xs:w-[99%] border rounded-lg flex  ">
        <div className="p-6 flex">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[26px] font-semibold">
                <sup className="text-base font-thin">$</sup>
                {data?.price}
              </p>
            </div>

            <p className="text-sm text-[#565959]">No Import Fees Deposit</p>

            <p>
              Delivery{" "}
              <b>Thursday, September 28. Order within 18 hrs 25 mins</b>
            </p>
            <p className="text-[#007600] text-lg font-semibold">in stock</p>
            <button
              className="bg-amazon-button text-sm px-6 xl:w-52 xl:h-8 md:w-full md:h-8 xs:w-full xs:h-8 rounded-full"
              onClick={handleAddToCart}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
