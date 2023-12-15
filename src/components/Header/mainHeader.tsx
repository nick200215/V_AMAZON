import { useLocation } from "react-router-dom";
import Categories from "./Categories/categories";
import TopHeader from "./topHeader";

const notToshow = {
  "/Amazon-Clone-Project/signin": true,
  "/Amazon-Clone-Project/signup": true,
  "/Amazon-Clone-Project/payment": true,
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      style={{
        display: notToshow[pathname as keyof typeof notToshow]
          ? "none"
          : "block",
      }}
    >
      <TopHeader />
      <Categories />
    </header>
  );
};
export default Header;
