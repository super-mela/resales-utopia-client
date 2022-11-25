import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../../../assets/line-red.svg";
import Title from "../../../../components/Title/Title";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./Categories.css";

SwiperCore.use([Pagination, Navigation]);

const Categories = () => {
  return (
    <div
      className="bg-no-repeat max-w-[1290px] mx-auto bg-top my-10 font-urbanist"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title>Shop By Categories</Title>

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
          spaceBetween={10}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
          <SwiperSlide>
            <CategoriesCard></CategoriesCard>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-secondary flex justify-center gap-2 items-center">
        <button className="prev">
          <FaAngleLeft className="text-3xl"></FaAngleLeft>
        </button>
        <button className="next">
          <FaAngleRight className="text-3xl"></FaAngleRight>
        </button>
      </div>
    </div>
  );
};

export default Categories;
