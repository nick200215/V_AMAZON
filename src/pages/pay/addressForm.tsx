import { AddressElement } from "@stripe/react-stripe-js";

const AddressForm = () => {
  return (
    <form className="payment-form">
      <h3>Shipping address</h3>
      <AddressElement
        options={{
          mode: "shipping",
          fields: {
            phone: "always",
          },
          validation: {
            phone: {
              required: "always",
            },
          },
        }}
      />
    </form>
  );
};

export default AddressForm;
