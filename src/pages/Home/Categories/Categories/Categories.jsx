import React from "react";

import bg from "../../../../assets/line-red.svg";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Title from "../../../../components/Title/Title";
import CategoriesSwipper from "../CategoriesSwipper/CategoriesSwipper";

const Categories = ({ categoriesData }) => {
  return (
    <section
      className="bg-no-repeat bg-right-bottom  px-24 mx-auto my-10 font-urbanist"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SectionTitle>We Have Perfect Match For You</SectionTitle>
      <Title>Shop By Categories</Title>
      <CategoriesSwipper categoriesData={categoriesData}></CategoriesSwipper>
    </section>
  );
};

export default Categories;
