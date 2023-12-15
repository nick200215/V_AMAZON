import { useEffect, useState } from "react";
import { useAppDispatch } from "../../types/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryProducts } from "../../features/CategorieProductSlice";

export const TheFilter = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const push = useNavigate();

  const [prices, setPrices] = useState({
    PriceFrom: "",
    PriceTo: "",
  });

  const [brand, setBrand] = useState({
    BrandName: "",
  });

  useEffect(() => {
    const url = window.location.href;
    const queryParameters = url.split("?")[1] || "";
    const queryParams = new URLSearchParams(queryParameters);

    setPrices({
      PriceFrom: queryParams.get("PriceFrom") || "",
      PriceTo: queryParams.get("PriceTo") || "",
    });

    setBrand({
      BrandName: queryParams.get("BrandName") || "",
    });
  }, []);

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = new URLSearchParams();

    if (prices.PriceFrom) {
      query.set("PriceFrom", prices.PriceFrom);
    }
    if (prices.PriceTo) {
      query.set("PriceTo", prices.PriceTo);
    }
    if (brand.BrandName) {
      query.set("BrandName", brand.BrandName);
    }

    const categoryId = id;
    const requestQuery = `CategoryId=${categoryId}&${query.toString()}`;

    push(`/Amazon-Clone-Project/categories/${id}?${query.toString()}`);

    dispatch(getCategoryProducts({ query: requestQuery, id: categoryId }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrand((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleFilter}>
      <div className="max-w-[400px] flex flex-col gap-2 p-5">
        <div className="flex gap-2 xl:flex-row md:flex-col xs:flex-row items-center">
          <input
            type="text"
            className="border rounded-md px-3 py-2 w-full"
            placeholder="min"
            name="PriceFrom"
            value={prices.PriceFrom}
            onChange={handlePriceChange}
          />
          <input
            type="text"
            className="border rounded-md px-3 py-2 w-full"
            placeholder="max"
            name="PriceTo"
            value={prices.PriceTo}
            onChange={handlePriceChange}
          />
        </div>
        <input
          type="text"
          className="border rounded-md px-3 py-2 w-full"
          placeholder="brand"
          name="BrandName"
          value={brand.BrandName}
          onChange={handleBrandChange}
        />
        <button
          type="submit"
          className="bg-amazon-button hover:bg-amazon-buttonhover text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  );
};
