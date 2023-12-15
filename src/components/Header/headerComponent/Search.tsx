import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getAllProducts } from "../../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../../../types/hooks";
import { Link } from "react-router-dom";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products);
  const productArray = Object.values(data);
  const [prodData, setProdData] = useState(productArray);

  useEffect(() => {
    dispatch(getAllProducts({ query: "PageNumber=1&PageSize=20" }));
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase();

    if (searchText) {
      const filteredProducts = productArray.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      );
      setInputText(searchText);
      setProdData(filteredProducts);
    } else {
      setInputText("");
      setProdData([]);
    }
  };

  return (
    <div className="flex-grow relative">
      <form className="bg-amazon-orange h-10 flex flex-grow items-center rounded-md max-md:mx-4 max-md:mb-2 xs:mb-1">
        <select
          defaultValue="All"
          className="hidden md:inline h-10 w-16 rounded-l text-gray-700 px-2 text-sm bg-gray-100 border-r border-gray-300 cursor-pointer outline-none"
        >
          <option disabled value="All">
            All
          </option>
          <option value="Computers">Computers</option>
          <option value="Arts & Crafts">Arts & Crafts</option>
          <option value="Baby">Baby</option>
          <option value="Book">Book</option>
        </select>
        <input
          type="text"
          className="outline-none w-full h-10 text-black pl-3 xl:rounded-none max-md:rounded-l xs:rounded-s-lg"
          placeholder="Search Amazon"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">
          <SearchIcon className="text-amazon-blue_dark my-1 mx-2 cursor-pointer" />
        </button>
      </form>
      <div className="absolute px-3 box-border bg-white text-black z-50 max-h-[300px] overflow-auto w-full rounded-md shadow-2xl">
        {inputText && prodData.length === 0 ? (
          <div className="h-2"></div>
        ) : inputText ? (
          <ul className="flex flex-col gap-2">
            {prodData.map((product) => (
              <li key={product.id}>
                <Link to={`/Amazon-Clone-Project/products/${product.id}`}>
                  <h2 className="font-bold">
                    {product.name.split(" ").slice(0, 10).join(" ")}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
