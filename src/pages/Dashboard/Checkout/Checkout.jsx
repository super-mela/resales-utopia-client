import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoginLoader from "../../../components/loginLoader/LoginLoader";
import Title from "../../../components/Title/Title";
import TopBanner from "../../../components/TopBanner/TopBanner";

const Checkout = ({
  booking,
  booking: { productName, sellingPrice, email, name, _id },
}) => {
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [confirmError, setConfirmError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // instance
    //   .post("http://localhost:5000/create-payment-intent", sellingPrice)
    //   .then((res) => console.log(res));

    fetch("https://resales-utopia-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sellingPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => {
        console.error(err);
        return;
      });
  }, [sellingPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error);
      setProcessing(false);
      return;
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setConfirmError(confirmError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        sellingPrice,
        transactionId: paymentIntent.id,
        email,
        bookingId: booking.productId,
      };
      fetch("https://resales-utopia-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Payment Completed");
            setSuccess(
              "Your Payment is Completed. Save the transaction id for future use."
            );
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <div>
      <TopBanner>Payment</TopBanner>

      <form
        className="w-full flex flex-col gap-5 max-w-md bg-white p-8 space-y-3 rounded-sm mx-auto my-10 border-2 text-neutral"
        onSubmit={handleSubmit}
      >
        <Title>{productName}</Title>
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
          className=" btn-action my-5 disabled:bg-gray-500 flex items-center justify-center"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay {processing && <LoginLoader></LoginLoader>}
        </button>
      </form>
      <div className="max-w-md mx-auto bg-white font-urbanist text-neutral rounded-sm border p-10 text-center mb-10">
        <p>{cardError.message}</p>
        <p>{success}</p>
        <p className="font-bold text-accent">Transaction ID: {transactionId}</p>
      </div>
    </div>
  );
};

export default Checkout;
