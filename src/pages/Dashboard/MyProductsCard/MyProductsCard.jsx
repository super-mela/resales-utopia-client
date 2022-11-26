import React from "react";
import { FiEye } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import IconWrapper from "../../../components/IconWrapper/IconWrapper";

const MyProductsCard = () => {
  return (
    <div className="relative card h-[260px] card-side bg-base-100 rounded-sm border font-urbanist text-secondary">
      {/* badge */}
      <div className="badge badge-primary text-white absolute top-2 left-2 font-bold">
        Available
      </div>
      <figure className="border p-1">
        <img
          src="https://placeimg.com/200/280/arch"
          alt="Movie"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body py-3 gap-3">
        <h2 className="card-title">New movie is released!</h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="text-secondary font-bold">BDT 2500</p>
        <p className="">Product Description in 100 words</p>
        <div className="card-actions justify-start">
          <IconWrapper>
            <FiEye className="text-white" dataTip="View" />
          </IconWrapper>
          <IconWrapper>
            <MdDeleteForever className="text-white" dataTip="Delete" />
          </IconWrapper>
          <IconWrapper>
            <RiAdvertisementFill
              className="text-white"
              dataTip="Advertise item"
            />
          </IconWrapper>
        </div>
      </div>
    </div>
  );
};

export default MyProductsCard;
