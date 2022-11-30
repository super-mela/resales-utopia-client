import React from "react";
import banner from "../../assets/banner-img5.png";

const TopBanner = ({ children }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom flex flex-col items-center justify-center px-24 font-urbanist h-[400px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="font-bold lg:text-[4.25em] text-2xl text-white mt-20">
        {children}
      </h1>
    </div>
  );
};

export default TopBanner;
