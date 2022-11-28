import React from "react";

const ConfirmationModal = ({ data, handleCloseModal, handleDeleteData }) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm bg-primary btn-circle absolute right-2 top-2"
            onClick={handleCloseModal}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mt-2">
            {`Are you sure you want to delete ${data.productName}?`}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="flex justify-center">
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
