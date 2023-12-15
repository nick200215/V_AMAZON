import { Link } from "react-router-dom";
import amazonLogo from "../../assets/img/amazon_PNG11.png";
import DeliveryTo from "./headerComponent/deliveryTo";
import Search from "./headerComponent/Search";
import AccountButtons from "./headerComponent/AccountButtons";

const Header = () => {
  return (
    <div className="bg-amazon-blue_dark flex flex-col md:flex-row">
      <div className="flex flex-grow items-center p-1 xs:px-8 md:space-x-5 xs:justify-between md:px-4 text-white">
        {/* Logo */}
        <Link to="/Amazon-Clone-Project/">
          <img
            src={amazonLogo}
            alt="amazon-logo"
            className="object-contain pt-2 xl:w-28 xl:h-14 md:h-12 md:w-24 xs:h-10 xs:w-24 xs:min-w-[45px] hover:border hover:border-white hover:p-1 hover:box-border"
          />
        </Link>

        <DeliveryTo />

        {/* Search */}
        <div className="hidden md:flex flex-grow">
          <Search />
        </div>

        {/* Account Buttons */}
        <AccountButtons />
      </div>

      {/* Search Mobile */}
      <div className="md:hidden xs:w-full xs:flex xs:justify-center xs:rounded-lg">
        <div className="flex items-center xs:w-5/6">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
