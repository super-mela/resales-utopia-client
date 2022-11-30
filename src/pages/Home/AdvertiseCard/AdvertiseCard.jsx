import React from "react";

const AdvertiseCard = ({ advertise }) => {
  return (
    <div className="flex lg:flex-row flex-col rounded-md h-[550px] bg-white ">
      <figure className="flex items-center justify-center px-5">
        <img src={`${advertise.photoURL}`} alt="" className="w-[500px]" />
      </figure>
      <div className="card-body text-neutral">
        <h2 className="card-title text-accent">Get 20% Off Today</h2>
        <p className="text-3xl">
          Offer On{" "}
          <span className="text-accent lg:text-6xl ">
            {advertise.productName}
          </span>
        </p>
        <p className="lg:text-4xl">
          {advertise?.desc?.length > 50
            ? advertise?.desc.slice(0, 50)
            : advertise.desc}
        </p>
        <div className="card-actions justify-center">
          <button className="btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
