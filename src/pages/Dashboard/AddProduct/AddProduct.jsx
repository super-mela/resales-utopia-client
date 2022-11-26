import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import TopBanner from "../../../components/TopBanner/TopBanner";
import ValidationError from "../../shared/ValidationError/ValidationError";

import "react-datepicker/dist/react-datepicker.css";
const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddProduct = (data) => {
    console.log(data);
  };

  return (
    <div>
      <TopBanner>Add A Product</TopBanner>

      {/* form */}

      <section className="p-6 font-urbanist text-secondary">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="container flex flex-col mx-auto space-y-12 py-5 border rounded-sm ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
            {/* Header */}
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-2xl">Product Inormation</p>
              <p className="text-xs">Add product</p>
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
                    <option>Good</option>
                    <option>Excellent</option>
                    <option selected>Fair</option>
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
                <DatePicker
                  className="rounded-sm border w-full px-2"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  showYearDropdown
                  scrollableMonthYearDropdown
                  showMonthDropdown
                />
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center w-full">
            <button className="btn-secondary">Create</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
