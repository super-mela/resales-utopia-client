import React from "react";

const BookingModal = () => {
  const handleBooking = (data) => {};
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
            onSubmit={handleBooking}
            className="py-4 flex flex-col gap-3 mt-2"
          >
            <input
              disabled
              type="email"
              defaultValue="email"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
            />

            <input
              disabled
              type="text"
              defaultValue="name"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
            />
            <input
              disabled
              type="text"
              defaultValue="Item Name"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
            />
            <input
              disabled
              type="text"
              defaultValue="price"
              className="input border-none w-full disabled:bg-gray-300 disabled:text-secondary"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered  w-full "
            />
            <input
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered w-full "
            />

            <input
              type="submit"
              value={"Submit"}
              className="input border-none w-full btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
