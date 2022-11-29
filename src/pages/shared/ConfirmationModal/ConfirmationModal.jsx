import React from "react";

const ConfirmationModal = ({ data, handleCloseModal, handleDeleteData }) => {
  return (
    <div className="">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-sm rounded-sm">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm bg-primary btn-circle absolute right-2 top-2"
            onClick={handleCloseModal}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mt-5 ">
            {`Are you sure you want to delete ${
              data?.productName || data?.name
            }?`}
          </h3>

          <div className="flex justify-center mt-2">
            <button
              className="btn-action hover:bg-accent hover:text-white "
              onClick={() => handleDeleteData(data)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
