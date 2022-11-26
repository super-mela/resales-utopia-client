import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  const navigation = useNavigation();

  return (
    <div>
      <Banner></Banner>
      {navigation.state === "loading" && <Preloader></Preloader>}
      <Advertise></Advertise>
      <Categories></Categories>
    </div>
  );
};

export default Home;
