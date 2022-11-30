import { format } from "date-fns/esm";
import React from "react";
import { AiFillHeart, AiOutlineFieldTime } from "react-icons/ai";
import { BiPurchaseTag, BiUser } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import IconWrapper from "../../../components/IconWrapper/IconWrapper";

const ProductCard = ({
  setBookingProduct,
  product,
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
    <div className="relative card  bg-white rounded-sm border font-urbanist text-secondary">
      <figure className="border-b">
        <img
          src={photoURL}
          alt="Shoes"
          className="h-[180px] object-scale-down"
        />
      </figure>

      <div className="card-body justify-between gap-1 py-2 px-4">
        <span className="text-gray-500 text-[17px] flex items-center gap-1">
          <BiUser />
          <span className="flex">
            <p>{seller}</p>
            {verifiedSeller && <MdVerified className="text-blue-600" />}
          </span>
        </span>

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
        <div className="text-[18px] flex flex-col gap-1">
          <div className="flex items-center justify-start gap-1">
            <span className="flex gap-0  items-center text-accent font-extrabold text-[22px]">
              <TbCurrencyTaka className="w-4 h-5" />
              {sellingPrice}
            </span>
            <span className="text-gray-500 font-bold text-[17px] line-through flex items-center">
              <TbCurrencyTaka className="w-3 h-3" />
              {buyingPrice}
            </span>
          </div>
          <p className="flex items-center gap-1">
            <BiPurchaseTag />
            Purchased in {purchaseYear}
          </p>
          <p className="flex gap-1 items-center">
            <GoLocation /> {location}
          </p>
          <span className="flex items-center gap-1">
            <AiOutlineFieldTime />
            <p>{format(new Date(postedOn), "PP")}</p>
          </span>
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
          <label
            htmlFor="booking-modal"
            className="btn-action px-3 py-2"
            onClick={() => setBookingProduct(product)}
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
