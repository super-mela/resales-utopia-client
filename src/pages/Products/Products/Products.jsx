import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import BookingModal from "../../../components/BookingModal/BookingModal";
import TopBanner from "../../../components/TopBanner/TopBanner";
import Preloader from "../../shared/Preloader/Preloader";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const {
    data: { result: categories },
  } = useLoaderData();

  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingProduct, setBookingProduct] = useState("");

  const {
    data: { products } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://resales-utopia-server.vercel.app/products/${id}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <Preloader></Preloader>;
  }

  return (
    <div>
      <TopBanner>{categories[0].categoryName}</TopBanner>
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
                {categories.map((category) => (
                  <option onClick={() => navigate(`/products/${category._id}`)}>
                    <Link to={`/products/${category._id}`}>
                      {category.categoryName}
                    </Link>
                  </option>
                ))}
              </select>
            </div>
            <p>
              {products.length} Products Found on {categories[0].categoryName}.{" "}
            </p>
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
          <div className="grid grid-cols-4 gap-5 my-10">
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setBookingProduct={setBookingProduct}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default Products;
