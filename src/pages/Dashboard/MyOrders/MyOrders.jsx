import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import TopBanner from "../../../components/TopBanner/TopBanner";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Preloader from "../../shared/Preloader/Preloader";
import MyOrdersCard from "../MyOrdersCard/MyOrdersCard";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: { bookingProducts } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  console.log(bookingProducts);
  if (isLoading) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      <TopBanner>My Orders</TopBanner>
      <div className="lg:px-24 py-10 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {bookingProducts?.length ? (
          bookingProducts?.map((booking) => (
            <MyOrdersCard key={booking._id} booking={booking}></MyOrdersCard>
          ))
        ) : (
          <h1>No Data To show</h1>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
