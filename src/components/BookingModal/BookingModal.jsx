import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ValidationError from "../../pages/shared/ValidationError/ValidationError";

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleBooking = (data) => {
    console.log(data);
    const { _id, ...rest } = bookingProduct;
    axios
      .post(`https://resales-utopia-server.vercel.app/bookings`, {
        ...data,
        ...rest,
        productId: _id,
        email: user?.email,
        name: user?.displayName,
      })
      .then((res) => {
        if (res.data.result.acknowledged) {
          toast.success("Product Booked");
          setBookingProduct("");
        }
      });
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
              defaultValue={user?.email}
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("email")}
            />

            <input
              disabled
              type="text"
              defaultValue={user?.displayName}
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("name")}
            />
            <input
              disabled
              type="text"
              defaultValue={bookingProduct.productName}
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("itemName")}
            />
            <input
              disabled
              type="text"
              defaultValue={bookingProduct.sellingPrice}
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
              {...register("price")}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered text-secondary w-full "
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
              className="input input-bordered w-full text-secondary"
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
              className="input border-none w-full btn-action cursor-pointer my-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
