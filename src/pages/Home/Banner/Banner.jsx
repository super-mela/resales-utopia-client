import React from "react";
import banner from "../../../assets/h5-logo1.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat min-h-screen bg-bottom flex flex-col items-start justify-center px-24 font-urbanist"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="font-bold text-[4.25em] text-white">
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
