import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseCart from "../../../../Hooks/UseCart";
import UseAuth from "../../../../Hooks/UseAuth";
const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const [cart] = UseCart();
  const { user } = UseAuth();
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalAmount > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalAmount })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (paymentMethod) {
      console.log("payment method", paymentMethod);
      setErrorMessage("");
    } else {
      console.log("payment error", error);
      setErrorMessage(error.message);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      setTransactionId(paymentIntent.id);
      //save the payment info in the database

      const payment = {
        email: user.email,
        price: totalAmount,
        transactionId: paymentIntent.id,
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      console.log(res.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary mt-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-rose-500">{errorMessage}</p>
      {transactionId && (
        <p className="text-green-500">
          Your Transaction id is: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
