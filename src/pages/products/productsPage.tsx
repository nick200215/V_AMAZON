import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { getAllProducts } from "../../features/productSlice";
import { AllProducts } from "../AllProducts/allProducts";
import { Pagination } from "@mui/material";

const ProductsPage = () => {
  const { data, isLoading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const initialPage =
    parseInt((window.location.search.match(/PageNumber=(\d+)/) || [])[1]) || 1;
  const [page, setPage] = useState(initialPage);

  const query = `PageNumber=${page}&PageSize=5`;

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const newURL = `/Amazon-Clone-Project/products?${query}`;
    window.history.pushState({ page }, "", newURL);

    window.scrollTo({ top: 0, behavior: "auto" });

    dispatch(getAllProducts({ query }));
  }, [page, dispatch]);

  const isDataAvailable = data && Object.keys(data).length > 0;

  return (
    <div>
      {isDataAvailable ? (
        <AllProducts data={Object.values(data)} isLoading={isLoading} />
      ) : (
        <div>loading . . .</div>
      )}
      <div className="flex justify-center py-2">
        <Pagination count={4} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ProductsPage;
