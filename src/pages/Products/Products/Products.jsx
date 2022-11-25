import React from "react";
import banner from "../../../assets/banner-img5.png";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-bottom flex flex-col items-center justify-center px-24 font-urbanist h-[400px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="font-bold text-[4.25em] text-white mt-10">Category</h1>
      </div>
      <div className="my-10 px-24">
        <div className="w-full text-secondary">
          {/* top bar */}
          <div className="flex border  justify-between items-center py-0 px-2 rounded-sm">
            <p>15 products found on Category. </p>
            <div>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite Simpson
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
    </div>
  );
};

export default Products;
