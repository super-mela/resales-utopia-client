import React from "react";
import banner from "../../../assets/h5-logo2.png";

const Banner = () => {
  return (
    <div
      className="bg-cover min-h-screen bg-bottom flex flex-col items-start justify-center px-24 font-urbanist"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="font-bold text-[4.25em] text-white">
        Beautiful <br /> <span className="text-primary">Moments</span> for you
      </h1>
      <div className="flex gap-5 mt-5">
        <button className="btn-secondary">Explore More</button>

        <button className="btn-primary">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
