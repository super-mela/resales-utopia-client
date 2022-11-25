import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import ValidationError from "../../pages/shared/ValidationError/ValidationError";

const BookingModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleBooking = (data, e) => {
    console.log(data);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleSubmit(handleBooking)}
            className="py-4 flex flex-col gap-3 mt-2"
          >
            <input
              disabled
              name="email"
              type="email"
              defaultValue="email@gmail.com"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("email")}
            />

            <input
              disabled
              type="text"
              defaultValue="name"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("name")}
            />
            <input
              disabled
              type="text"
              defaultValue="Item Name"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("itemName")}
            />
            <input
              disabled
              type="text"
              defaultValue="price"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("price")}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered  w-full "
              {...register("phone", {
                required: "Phone Number is required!",
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
            <input
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered w-full "
              {...register("location", {
                required: "Meeting Number is required!",
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
            <input
              type="submit"
              value={"Submit"}
              className="input border-none w-full btn-secondary cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
