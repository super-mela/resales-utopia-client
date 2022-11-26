import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Preloader></Preloader>;
  } else {
    return (
      <div>
        <Banner></Banner>
        <Advertise></Advertise>
        <Categories categoriesData={categoriesData}></Categories>
      </div>
    );
  }
};

export default Home;
