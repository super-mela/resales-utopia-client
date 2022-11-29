import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData();
  const navigation = useNavigation();

  const {
    data: { adevertisements } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisement"],
    queryFn: () =>
      fetch(`https://resales-utopia-server.vercel.app/advertise`).then((res) =>
        res.json()
      ),
  });

  if (navigation.state === "loading" || isLoading) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      <Banner></Banner>
      {adevertisements?.length && <Advertise>{adevertisements}</Advertise>}
      <Categories categoriesData={categoriesData}></Categories>
    </div>
  );
};

export default Home;
