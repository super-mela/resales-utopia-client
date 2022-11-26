import React from "react";

import bg from "../../../../assets/line-red.svg";
import Title from "../../../../components/Title/Title";
import CategoriesSwipper from "../CategoriesSwipper/CategoriesSwipper";

const Categories = () => {
  return (
    <div
      className="bg-no-repeat max-w-[1290px] mx-auto bg-top my-10 font-urbanist"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title>Shop By Categories</Title>
      <CategoriesSwipper></CategoriesSwipper>
    </div>
  );
};

export default Categories;
