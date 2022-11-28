import { format } from "date-fns/esm";
import React from "react";
import { AiFillHeart, AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import IconWrapper from "../../../components/IconWrapper/IconWrapper";

const ProductCard = ({
  product: {
    productName,
    buyingPrice,
    sellingPrice,
    condition,
    phone,
    location,
    purchaseYear,
    photoURL,
    seller,
    verifiedSeller,
    postedOn,
  },
}) => {
  return (
    <div className="relative card bg-white rounded-sm border font-urbanist text-secondary">
      <figure className="border-b">
        <img
          src={photoURL}
          alt="Shoes"
          className="h-[180px] object-scale-down"
        />
      </figure>

      <div className="card-body gap-1 py-2 px-2">
        <div className="flex justify-between text-gray-500 text-[17px]">
          <span className="flex items-center gap-1">
            <FaUserTie />
            <p>{seller}</p>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineFieldTime />
            <p className="text-right">{format(new Date(postedOn), "PP")}</p>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="card-title text-[22px] font-bold leading-6">
            {productName}
          </h2>
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
        <div className="text-[18px]">
          <div className="flex items-center justify-start gap-3">
            <span className="flex gap-0 items-center text-accent font-extrabold text-[20px]">
              <TbCurrencyTaka className="w-4 h-5" />
              {buyingPrice}
            </span>
            <span className="text-gray-500 font-bold text-[17px]">
              {" "}
              {sellingPrice}
            </span>
          </div>
          <p className="">
            Used <span>4</span> Years
          </p>
          <p>Sholokbohor, Chattogram, Bangladesh</p>
        </div>
        <div className="card-actions justify-between items-center mt-1">
          <div className="flex gap-2">
            <IconWrapper>
              <FiEye className="text-white" dataTip="View" />
            </IconWrapper>
            <IconWrapper>
              <AiFillHeart className="text-white" dataTip="Add to Wishlist" />
            </IconWrapper>
          </div>
          <label htmlFor="booking-modal" className="btn-action px-3 py-2">
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
