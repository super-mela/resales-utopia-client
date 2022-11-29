import React from "react";

const AdvertiseCard = ({ advertise }) => {
  return (
    <div className="flex rounded-md h-[550px] bg-white ">
      <figure className="flex items-center justify-center px-5">
        <img src={`${advertise.photoURL}`} alt="" className="w-[400px]" />
      </figure>
      <div className="card-body text-neutral">
        <h2 className="card-title text-accent">Get 20% Off Today</h2>
        <p className="text-4xl">Offer On {advertise.productName}</p>
        <p className="text-4xl">Offer On {advertise.desc}</p>
        <div className="card-actions justify-center">
          <button className="btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
