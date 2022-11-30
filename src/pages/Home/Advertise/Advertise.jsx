import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../../../assets/line-red-top.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Title from "../../../components/Title/Title";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Advertise = ({ children: advertisements }) => {
  console.log(
    "🚀 ~ file: Advertise.jsx ~ line 18 ~ Advertise ~ children",
    advertisements
  );
  // const unpaidProducts = adevertisements?.filter(
  //   (advertisement) => advertisement.paid !== true
  // );

  // const images = unpaidProducts.map((advertisement) => ({
  //   original: advertisement.photoURL,
  //   thumbnail: advertisement.photoURL,
  // }));

  // if (isLoading) {
  //   return <Preloader></Preloader>;
  // }

  return (
    <section
      className="bg-no-repeat lg:px-24 mx-auto bg-right  my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SectionTitle>Today's Featured Products</SectionTitle>
      <Title>Hot Deals</Title>
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
              slidesPerView: 1,
            },
            1280: {
              width: 1290,
              slidesPerView: 1,
            },
          }}
          spaceBetween={5}
          autoplay
          navigation={{
            prevEl: ".prevAd",
            nextEl: ".nextAd",
          }}
          className="categoriesSwipper"
        >
          {advertisements?.map((advertise) => (
            <SwiperSlide key={advertise._id}>
              <AdvertiseCard advertise={advertise}></AdvertiseCard>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation */}
        <div className="text-white flex justify-center gap-2 items-center mt-5">
          <button className="prevAd bg-primary p-1 text-center rounded-full hover:bg-info hover:text-primary">
            <FaAngleLeft className="text-3xl"></FaAngleLeft>
          </button>
          <button className="nextAd bg-primary p-1 text-center rounded-full hover:bg-info hover:text-primary">
            <FaAngleRight className="text-3xl"></FaAngleRight>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
