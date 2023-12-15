import { Elements } from "@stripe/react-stripe-js";
import AddressForm from "./addressForm";
import { loadStripe } from "@stripe/stripe-js";
import CardElementForm from "./checkoutForm";
import Logo from "../../assets/img/Amazon_logo_for_sign.svg";
import LockIcon from "@mui/icons-material/Lock";
import { useAppSelector } from "../../types/hooks";

// const stripe = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");
const stripe = loadStripe(
  "pk_test_51O2JL9HYRXUSot0731En3p06TRbIWImJP38trEi15dnOt3yDTtJ2RrixBvwGt6jYITazK6nLJr4db4S2qanKlGNz00y6eof0Vr"
);
const Payment = () => {
  const items = useAppSelector((state) => state.user.cartItems.data);
  const cartAmount = Object.values(items).length;

  const totalprice = Object.values(items).reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  const options = {
    appearance: {},
  };
  return (
    <Elements stripe={stripe} options={options}>
      <header className="flex justify-center">
        <div className="flex justify-center bg-gradient-to-b from-neutral-100 via-stone-200 to-neutral-300 h-20 w-[97%] border-b border-gray-400">
          <div className="flex justify-between items-center xl:w-[70%] md:w-[80%] xs:w-[90%] ">
            <a href="/Amazon-Clone-Project/">
              <img
                src={Logo}
                alt=""
                className="xl:max-w-[8rem] md:max-w-[6rem] xs:max-w-[5rem] xl:h-auto md:h-auto xs:h-auto"
              />
            </a>
            <div className="flex xl:flex-row md:flex-col xs:flex-col xl:items-center text-center xl:gap-4 ">
              <p className="xl:text-3xl md:text-2xl xs:text-xl ">
                checkout (
                <span className="text-blue-500">item {cartAmount}</span>)
              </p>
              <p className="font-bold text-lg">${totalprice}</p>
            </div>
            <LockIcon />
          </div>
        </div>
      </header>

      <AddressForm />

      <CardElementForm />
    </Elements>
  );
};

export default Payment;
