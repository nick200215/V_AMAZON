import { Link } from "react-router-dom";
import { Product } from "../../../types/products";
import { useEffect, useState } from "react";
import { getCategories } from "../../../services/getCategories";
import { Category } from "../../../types/CategoriesResponse";

interface Props {
  data?: Product;
  isLoading: boolean;
}

const BackToResult = ({ data, isLoading }: Props) => {
  const categoryID = data?.categoryId;

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (categoryID && categories.length > 0) {
      const foundCategory = categories.find(
        (category) => category.id === categoryID
      );
      if (foundCategory) {
        setCategoryName(foundCategory.name);
      }
    }
  }, [categoryID, categories]);

  if (!data && !isLoading) {
    return <h1>No products found</h1>;
  }

  return (
    <div className="w-full flex gap-2 mt-[-30px]  ">
      <Link to="/Amazon-Clone-Project/products">
        <h2 className="cursor-pointer text-xs text-gray-500">
          Back to Result{" "}
        </h2>
      </Link>
      {categoryName && (
        <>
          <p className="text-xs">-</p>
          <Link to={`/Amazon-Clone-Project/categories/${categoryID}`}>
            <h2 className="cursor-pointer text-xs text-gray-500">
              {categoryName}
            </h2>
          </Link>
        </>
      )}
      <p className="text-xs">-</p>
      <h2 className="cursor-context-menu text-xs text-gray-500">
        {data?.model}
      </h2>
    </div>
  );
};

export default BackToResult;
