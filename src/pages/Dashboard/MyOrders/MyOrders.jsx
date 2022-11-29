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

  if (isLoading) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      <TopBanner>My Orders</TopBanner>
      <div className="lg:px-24 py-10 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {bookingProducts?.length ? (
          bookingProducts?.map((booking) => (
            <MyOrdersCard
              refetch={refetch}
              key={booking._id}
              booking={booking}
            ></MyOrdersCard>
          ))
        ) : (
          <div className="col-span-full text-accent min-h-[50vh] font-bold text-center">
            <h3>You Dont have any orders. Please order first.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
