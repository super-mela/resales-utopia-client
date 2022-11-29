import { format } from "date-fns";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiPurchaseTag, BiUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyOrdersCard = ({
  booking,
  booking: {
    _id,
    photoURL,
    productName,
    sellingPrice,
    desc,
    seller,
    verifiedSeller,
    postedOn,
    buyingPrice,
    location,
    purchaseYear,
  },
}) => {
  return (
    <div className="relative card lg:card-side bg-white rounded-sm border font-urbanist text-secondary">
      {booking?.paid && (
        <div className="badge badge-accent text-white absolute top-2 left-2 font-bold">
          Paid
        </div>
      )}

      <figure className="border-b">
        <img
          src={photoURL}
          alt="Shoes"
          className="h-[180px] object-scale-down"
        />
      </figure>

      <div className="card-body gap-1 py-2 px-4">
        <span className="text-gray-500 text-[17px] flex items-center gap-1">
          <BiUser />
          <span className="flex">
            <p>{seller}</p>
            <MdVerified className="text-blue-600" />
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
        <div className="card-actions justify-center items-center mt-1">
          {!booking?.paid && (
            <Link
              to={`/payment/${_id}`}
              className="btn-action px-3 py-2"
              // onClick={() => setBookingProduct(product)}
            >
              Payment Order
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersCard;
