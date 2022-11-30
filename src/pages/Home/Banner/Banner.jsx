import React from "react";
import banner from "../../../assets/h5-logo1.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat lg:min-h-screen h-[80vh] bg-bottom flex flex-col lg:items-start justify-center lg:px-24 px-5 font-urbanist items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="font-bold lg:text-[4.25em] text-5xl text-white">
        Beautiful <br /> <span className="text-accent">Moments</span> for you
      </h1>
      <div className="flex gap-5 mt-5">
        <button className="btn-primary">Shop Now</button>
        <button className="btn-secondary">Explore More</button>
      </div>
    </div>
  );
};

export default Banner;
