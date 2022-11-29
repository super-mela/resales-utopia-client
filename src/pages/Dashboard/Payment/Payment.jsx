import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Preloader from "../../shared/Preloader/Preloader";
import Checkout from "../Checkout/Checkout";
const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_KEY);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(
    `https://resales-utopia-server.vercel.app/bookings/${id}?email=${user?.email}`
  );
  const {
    data: { bookingProduct } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/booking/${id}?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });

  console.log(bookingProduct);
  if (isLoading) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout booking={bookingProduct} />
      </Elements>
    </div>
  );
};

export default Payment;
