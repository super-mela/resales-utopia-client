import React from "react";
import bg from "../../../assets/line-red-top.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Title from "../../../components/Title/Title";

const Advertise = () => {
  return (
    <section
      className="bg-no-repeat px-24 mx-auto bg-right  my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SectionTitle>Today's Featured Products</SectionTitle>
      <Title>Hot Deals</Title>
    </section>
  );
};

export default Advertise;
