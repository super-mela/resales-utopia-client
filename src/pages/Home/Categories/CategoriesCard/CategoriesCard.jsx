import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = () => {
  return (
    <div className="text-secondary card card-side bg-base-100 rounded-sm gap-1 border w-[400px] h-[250px]">
      <figure className="">
        <img
          src="https://placeimg.com/400/400/arch"
          alt="Album"
          className="h-full w-[400px]"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">Camera</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <Link to={"/products"} className="btn-primary w-[80%] mx-auto p-2">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
