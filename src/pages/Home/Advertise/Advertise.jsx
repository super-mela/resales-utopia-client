import React from "react";
import bg from "../../../assets/line-red-top.png";
import Title from "../../../components/Title/Title";

const Advertise = () => {
  return (
    <div
      className="bg-no-repeat min-h-screen max-w-[1290px] mx-auto bg-right  my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title>Hot Deals</Title>
    </div>
  );
};

export default Advertise;
