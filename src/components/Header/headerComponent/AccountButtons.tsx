import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../types/hooks";
import { getCartItem, handleLogout } from "../../../features/userSlice";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cart from "../../../assets/img/1696933419762-Standard (2).png";

const AccountButtons = () => {
  const { unique_name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.user.cartItems.data);
  const cartAmount = Object.values(items).length;

  const isSignIn = !!unique_name;

  useEffect(() => {
    if (isSignIn) {
      dispatch(getCartItem());
    }
  }, [isSignIn, dispatch]);

  return (
    <div className="flex items-center max-md:ml-auto md:space-x-6 space-x-2">
      <div>
        <div className="group inline-block relative">
          <div className="font-semibold py-2 px-4 rounded inline-flex items-center ">
            {isSignIn ? (
              <Link to="/Amazon-Clone-Project/account">
                <div className="xl:hidden md:flex xs:flex flex-row justify-center xs:space-x-[-40px] items-center w-[90px] xs:text-[12px]">
                  <span className="w-full flex">
                    {" "}
                    {isSignIn ? unique_name : "Sign in"}
                    <ChevronRightIcon fontSize="small" />
                  </span>{" "}
                  <PersonOutlineIcon />
                </div>
              </Link>
            ) : (
              <Link to="/Amazon-Clone-Project/signin">
                <div className="xl:hidden md:flex xs:flex flex-row justify-center xs:space-x-[-40px] items-center w-[90px] xs:text-[12px]">
                  <span className="w-full flex">
                    {" "}
                    {isSignIn ? unique_name : "Sign in"}
                    <ChevronRightIcon fontSize="small" />
                  </span>{" "}
                  <PersonOutlineIcon />
                </div>
              </Link>
            )}

            <div className="xl:inline md:hidden xs:hidden  link relative show-account p-1 text-start">
              <p className="text-xs text-slate-300">
                Hello, {unique_name ? unique_name : "sign in"}
              </p>
              <p className="flex font-bold text-sm">Account & Lists</p>
            </div>
            <svg
              className="fill-current h-4 w-4 xl:block md:hidden xs:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>

          <div className="rounded-md  absolute hidden w-56  bg-white text-black pt-1  xl:group-hover:block  z-10">
            {!isSignIn ? (
              <div className="rounded-md bg-white p-6">
                <Link
                  className="rounded-lg py-2 px-8  block whitespace-no-wrap bg-amazon-button text-center"
                  to="/Amazon-Clone-Project/signin"
                >
                  signIn
                </Link>

                <p>
                  new customer?{" "}
                  <Link
                    to="/Amazon-Clone-Project/signup"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    start here
                  </Link>
                </p>
              </div>
            ) : (
              <div className="rounded-md bg-white p-6 flex flex-col gap-3">
                <Link
                  className="rounded-lg py-2 px-8  block whitespace-no-wrap bg-amazon-manage text-center"
                  to="/Amazon-Clone-Project/account"
                >
                  manage profile
                </Link>

                <Link
                  to="/Amazon-Clone-Project/signup"
                  className=" rounded-lg py-2 px-8 block whitespace-no-wrap bg-amazon-button text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    dispatch(handleLogout());
                  }}
                >
                  signOut{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="link hidden md:inline hover:border hover:border-white hover:p-1 hover:box-border">
        <p className="text-xs text-slate-300">Returns</p>
        <p className="font-bold text-sm">& Orders</p>
      </div>
      {/* Cart */}
      <div className="relative link flex items-center ">
        <span className="flex items-center justify-center absolute top-1 right-[0.44rem] xl:right-11 md:right-10 xs:right-4 bg-amazon-orange text-amazon-blue_dark font-semibold h-5 w-5 rounded-full">
          {cartAmount}
        </span>
        <Link to="/Amazon-Clone-Project/cart">
          <img src={cart} alt="" className="w-[65px] h-[50px] xs:min-w-60" />
        </Link>
        <p className="hidden md:inline font-bold mt-2 text-sm">Cart</p>
      </div>
    </div>
  );
};

export default AccountButtons;
