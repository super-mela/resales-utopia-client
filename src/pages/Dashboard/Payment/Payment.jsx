import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Preloader from "../../shared/Preloader/Preloader";
import Checkout from "../Checkout/Checkout";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51M5wKgL6Av66sfDxrzKdiKXsSRTZkWEdHicVQ2SJK4geG6P8qpBlbl9lvjs3L6cwo9EYsZPA4XEPDoKylGzlcX1N00MsGExXk1"
  );
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const {
    data: { bookingProduct } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/bookings/${id}?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
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
