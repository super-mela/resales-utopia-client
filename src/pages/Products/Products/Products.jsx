import React from "react";
import BookingModal from "../../../components/BookingModal/BookingModal";
import TopBanner from "../../../components/TopBanner/TopBanner";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div>
      <TopBanner>Category</TopBanner>
      <div className="my-10 px-24">
        <div className="w-full text-secondary">
          {/* top bar */}
          <div className="flex border text-gray-500 justify-between items-center py-0 px-2 rounded-sm">
            {/* Categories */}
            <div>
              <select className="w-full  outline-2 max-h-[50px] focus:outline-none px-2 py-1 m-1 border-2 rounded-sm">
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
              <select className="w-full  outline-2 max-h-[50px] focus:outline-none px-2 py-1 m-1 border-2 rounded-sm">
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
