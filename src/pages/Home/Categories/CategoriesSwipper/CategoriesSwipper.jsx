import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./CategoriesSwipper.css";

SwiperCore.use([Pagination, Navigation]);

const CategoriesSwipper = ({
  categoriesData: {
    data: { result: categories },
  },
}) => {
  return (
    <div className="my-5 swiper-container">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1280: {
            width: 1290,
            slidesPerView: 3,
          },
        }}
        spaceBetween={5}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="categoriesSwipper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <CategoriesCard
              categories={categories}
              category={category}
            ></CategoriesCard>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* navigation */}
      <div className="text-white flex justify-center gap-2 items-center mt-5">
        <button className="prev bg-primary p-1 text-center rounded-full hover:bg-info hover:text-primary">
          <FaAngleLeft className="text-3xl"></FaAngleLeft>
        </button>
        <button className="next bg-primary p-1 text-center rounded-full hover:bg-info hover:text-primary">
          <FaAngleRight className="text-3xl"></FaAngleRight>
        </button>
      </div>
    </div>
  );
};

export default CategoriesSwipper;
