import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import TopBanner from "../../../components/TopBanner/TopBanner";
import UsersTable from "../../../components/UsersTable/UsersTable";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Preloader from "../../shared/Preloader/Preloader";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: { buyers } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/buyers?email=${user.email}`,
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
      <TopBanner>ALl Buyers</TopBanner>
      <UsersTable data={buyers} refetch={refetch}></UsersTable>
    </div>
  );
};

export default AllBuyers;
