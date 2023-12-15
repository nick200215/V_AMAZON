import { CardElement } from "@stripe/react-stripe-js";
import "./cartElementCss.css";

const cardElementStyle = {
  base: {
    fontSize: "16px",
    color: "#333",
    "::placeholder": {
      color: "#aab7c4",
    },
  },
  invalid: {
    color: "#e54242",
  },
};

const CardElementForm = () => {
  return (
    <form className="payment-form">
      <div className="card-element-container">
        <label className="card-label">Card Details</label>
        <div className="card-element">
          <CardElement options={{ style: cardElementStyle }} />
        </div>
      </div>
      <button type="submit" className="pay-button">
        Pay Now
      </button>
    </form>
  );
};

export default CardElementForm;
