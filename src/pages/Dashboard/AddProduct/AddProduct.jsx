import { ErrorMessage } from "@hookform/error-message";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import banner from "../../../assets/banner-slide3.png";
import TopBanner from "../../../components/TopBanner/TopBanner";
import ValidationError from "../../shared/ValidationError/ValidationError";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import LoginLoader from "../../../components/loginLoader/LoginLoader";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { instance } from "../../../utils/AxiosInstance";

const AddProduct = () => {
  const {
    data: { result: categories },
  } = useLoaderData();
  const [createLoading, setCreateLoading] = useState(false);
  const formData = new FormData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

  const handleAddProduct = (data) => {
    setCreateLoading(true);
    formData.append("image", data?.photoUrl[0]);
    // Image upload
    axios({
      method: "post",
      url: `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Image_Host_API}`,
      data: formData,
    })
      .then((res) => {
        if (res?.data?.success) {
          /* set User profile to state to access from another context */
          console.log(res.data.data.url);
          const { photoUrl, ...rest } = data;
          const product = { ...rest, photoURL: res.data.data.url };

          console.log(product);

          // save in database
          saveProductInfo(product);
        } else {
          toast.error("Failed to upload picture");
          return;
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setCreateLoading(false);
        return;
      });
    setCreateLoading(false);
  };

  const saveProductInfo = (product) => {
    instance
      .post(`/products?email=${user.email}`, product)
      // axios({
      //   method: "post",
      //   url: `https://resales-utopia-server.vercel.app/products?email=${user.email}`,
      //   // headers: {
      //   //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   // },
      //   data: product,
      // })
      .then((res) => {
        toast.success("Product Added");
        navigate("/myproducts");
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <TopBanner>Add A Product</TopBanner>

      {/* form */}

      <section className="lg:px-24 py-10 font-urbanist text-neutral bg-base-100">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="container flex flex-col mx-auto  py-5 rounded-sm ng-untouched ng-pristine ng-valid bg-white"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
            {/* Header */}
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-2xl">Product Inormation</p>
              <p className="text-xs">
                Add product information to create a product
              </p>
              <img src={banner} alt="" />
            </div>

            {/* Form */}
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Product Name */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Product name"
                  className="w-full rounded-sm px-2 border"
                  {...register("productName", {
                    required: "Product name is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="productName"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>
              {/* Buying Price */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Buying Price
                </label>
                <input
                  type="text"
                  placeholder="Buying Price"
                  className="w-full rounded-sm px-2 border"
                  {...register("buyingPrice", {
                    required: "Buying Price is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="buyingPrice"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>
              {/* Selling Price */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Selling Price
                </label>
                <input
                  type="text"
                  placeholder="Selling Price"
                  className="w-full rounded-sm px-2 border"
                  {...register("sellingPrice", {
                    required: "Selling Price is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="sellingPrice"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>
              {/* Condition */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Product Condition
                </label>
                <div className="rounded-sm border">
                  <select
                    className="w-full h-full focus:outline-none bg-transparent"
                    {...register("condition")}
                  >
                    <option>Good</option>
                    <option>Excellent</option>
                    <option selected>Fair</option>
                  </select>
                </div>
              </div>
              {/* Category */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Product Category
                </label>
                <div className="rounded-sm border">
                  <select
                    className="w-full h-full focus:outline-none bg-transparent"
                    {...register("category")}
                  >
                    {categories.map((category) => (
                      <option key={category._id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* phone */}
              <div className="col-span-full sm:col-span-3">
                <label for="Product Name" className="text-sm">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-sm px-2 border"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>
              {/* Lcation */}
              <div className="col-span-full sm:col-span-3">
                <label for="Location" className="text-sm">
                  Your Location
                </label>
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full rounded-sm px-2 border"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="location"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>
              {/* Purchase Year */}
              <div className="col-span-full sm:col-span-3">
                <label for="Date" className="text-sm">
                  Purchase Year
                </label>
                <input
                  type="text"
                  placeholder="Purchase Year"
                  className="w-full rounded-sm px-2 border"
                  {...register("purchaseYear", {
                    required: "Purchase is required",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="purchaseYear"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="block ">
                  Photo
                </label>
                <input
                  type="file"
                  placeholder="Photo Url"
                  className="w-full rounded-sm px-2 border py-1"
                  {...register("photoUrl", {
                    required: "PhotoUrl is required!",
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="photoUrl"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label for="Date" className="text-sm">
                  Product Description
                </label>
                <textarea
                  className="textarea w-full border rounded-sm bg-white"
                  placeholder="Product Description"
                  {...register("desc", {
                    required: "Description Year is required",
                  })}
                ></textarea>
                <ErrorMessage
                  errors={errors}
                  name="desc"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <ValidationError
                            key={type}
                            message={message}
                          ></ValidationError>
                        ))
                      : null;
                  }}
                />

                {/* image */}
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center mt-5">
            <button
              className="btn-primary disabled:bg-gray-500 flex justify-center items-center gap-1"
              type="submit"
              disabled={createLoading}
            >
              Add Product {createLoading && <LoginLoader></LoginLoader>}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
