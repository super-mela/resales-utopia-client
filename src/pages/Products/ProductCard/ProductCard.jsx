import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import IconWrapper from "../../../components/IconWrapper/IconWrapper";

const ProductCard = () => {
  return (
    <div className="card card-compact bg-base-100 rounded-sm">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>

      <div className="card-body">
        <div className="flex justify-between text-gray-500">
          <p>Dabasish Das Joy</p>
          <p className="text-right">4th Nov, 2022</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="card-title">Camera</h2>
        </div>
        <div className="rating flex items-center ">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  w-3 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  w-3 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  w-3 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  w-3 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  w-3 bg-orange-400"
          />
          <p>(4.5)</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Buying Price: BDT 45000</p>
            <p className="text-right">
              Used <span>4</span> Years
            </p>
          </div>
          <p>Sholokbohor, Chattogram, Bangladesh</p>
          <p>Selling Price: BDT 45000</p>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="flex gap-2">
            <IconWrapper>
              <FiEye className="text-white" dataTip="View" />
            </IconWrapper>
            <IconWrapper>
              <AiFillHeart className="text-white" dataTip="Add to Wishlist" />
            </IconWrapper>
          </div>
          <label htmlFor="booking-modal" className="btn-primary px-3 py-2">
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
