import React from "react";
import banner from "../../../assets/banner-img5.png";
import BookingModal from "../../../components/BookingModal/BookingModal";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-bottom flex flex-col items-center justify-center px-24 font-urbanist h-[500px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="font-bold text-[4.25em] text-white mt-10">Category</h1>
      </div>
      <div className="my-10 px-24">
        <div className="w-full text-secondary">
          {/* top bar */}
          <div className="flex border text-gray-500 justify-between items-center py-0 px-2 rounded-sm">
            {/* Categories */}
            <div>
              <select className="w-full max-w-xs outline-2 max-h-[50px] focus:outline-none px-2 py-1 m-1 border-2 rounded-sm">
                <option disabled selected>
                  All Categories
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <p>15 products found on Category. </p>
            {/* Sort */}
            <div>
              <select className="w-full max-w-xs outline-2 max-h-[50px] focus:outline-none px-2 py-1 m-1 border-2 rounded-sm">
                <option disabled selected>
                  Sort By
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
          </div>
          {/* top bar end*/}

          {/* products */}
          <div className="grid grid-cols-3 gap-10 my-10">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default Products;
