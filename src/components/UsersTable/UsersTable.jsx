import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../pages/shared/ConfirmationModal/ConfirmationModal";
import { instance } from "../../utils/AxiosInstance";
import Title from "../Title/Title";

const UsersTable = ({ data, refetch }) => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState("");

  const handleCloseModal = () => {
    setDeleteProduct(null);
  };
  const handleDelete = () => {
    instance
      .delete(`/buyers/${deleteProduct._id}?email=${user?.email}`)
      .then((res) => {
        if (res.data.result.deletedCount) {
          toast.success("User deleted successfully");
          setDeleteProduct(null);
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="lg:px-24 py-5 font-urbanist text-secondary">
      <div className="container p-2 mx-auto sm:p-4">
        <Title>Buyers</Title>
        <div className="overflow-x-auto border">
          <table className="min-w-full text-sm">
            <thead className="bg-secondary text-white">
              <tr className="text-left">
                <th className="p-3">Buyers</th>
                <th className="p-3">Email</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => (
                <tr className="border-b border-opacity-20 border-gray-700 ">
                  <td className="p-3">
                    <p>{d.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{d.email}</p>
                  </td>
                  <td className="p-3 text-center">
                    <label
                      htmlFor="confirmation-modal"
                      onClick={() => setDeleteProduct(d)}
                      className="btn-action px-3 py-1 border-none font-semibold  bg-accent text-white"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteProduct && (
        <ConfirmationModal
          data={deleteProduct}
          handleCloseModal={handleCloseModal}
          handleDeleteData={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default UsersTable;
