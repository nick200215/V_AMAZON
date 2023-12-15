import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../services/getCategories";
import "./categoriesStyle.scss";
import { Category } from "../../../types/CategoriesResponse";

const ALL_PRODUCTS_LINK = "/Amazon-Clone-Project/products";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="bg-amazon-blue_light w-[100%] flex justify-center h-[40px] items-center">
      <div className="tablist flex items-center xl:justify-between  w-[95%] py-2 text-xs md:justify-between h-full ">
        <p className="flex align-middle justify-center text-white text-center text-[15px] ">
          <Link to={ALL_PRODUCTS_LINK} className="tablist__link">
            All Product
          </Link>
        </p>
        <ul className="inner  flex justify-between gap-4 text-center items-center w-[90%] ">
          {categories.map((category) => (
            <li className="tablist__tab h-full " key={category.id}>
              <Link
                to={`/Amazon-Clone-Project/categories/${category.id}`}
                className="tablist__link h-full"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
