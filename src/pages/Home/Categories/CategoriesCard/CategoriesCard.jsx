import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category: { categoryName, desc, img, _id } }) => {
  return (
    <div className="text-neutral font-urbanist grid grid-cols-5 bg-white rounded-sm gap-1 border w-[420px] h-[250px]">
      <figure className="col-span-2">
        <img
          src={img}
          alt="Album"
          className="h-full w-full object-scale-down border-r p-2"
        />
      </figure>
      <div className="flex flex-col justify-between p-2 col-span-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold leading-6">{categoryName}</h2>
          <p className="font-mulish text-gray-500 text-xs">{desc}</p>
        </div>
        <div className="flex justify-center">
          <Link to={`/products/${_id}`} className="btn-action mx-auto">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
