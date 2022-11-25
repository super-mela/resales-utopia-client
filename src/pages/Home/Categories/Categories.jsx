import React from "react";
import bg from "../../../assets/line-red.svg";
import Title from "../../../components/Title/Title";

const Categories = () => {
  return (
    <div
      className="bg-no-repeat min-h-screen max-w-[1290px] mx-auto bg-top my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title>Shop By Categories</Title>
    </div>
  );
};

export default Categories;
