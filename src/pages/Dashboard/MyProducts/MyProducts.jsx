import React from "react";
import TopBanner from "../../../components/TopBanner/TopBanner";
import MyProductsCard from "../MyProductsCard/MyProductsCard";

const MyProducts = () => {
  return (
    <div>
      <TopBanner>My Products</TopBanner>

      <div className="px-24 py-10 grid grid-cols-2 gap-10">
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
        <MyProductsCard></MyProductsCard>
      </div>
    </div>
  );
};

export default MyProducts;
