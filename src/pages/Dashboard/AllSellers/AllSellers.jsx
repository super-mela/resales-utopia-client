import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Title from "../../../components/Title/Title";
import TopBanner from "../../../components/TopBanner/TopBanner";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { instance } from "../../../utils/AxiosInstance";
import ConfirmationModal from "../../shared/ConfirmationModal/ConfirmationModal";
import Preloader from "../../shared/Preloader/Preloader";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [deleteUser, setDeleteUser] = useState("");

  const {
    data: { sellers } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/sellers?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Preloader></Preloader>;
  }

  const handleCloseModal = () => {
    setDeleteUser(null);
  };
  const handleDelete = () => {
    instance
      .delete(`/sellers/${deleteUser._id}?email=${user.email}`)
      .then((res) => {
        if (res.data.result.deletedCount) {
          toast.success("User deleted successfully");
          setDeleteUser(null);
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleUpdateSeller = (seller) => {
    instance
      .put(`sellers/${seller._id}?email=${user.email}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <TopBanner>All Seller</TopBanner>

      <div className=";g:px-24 py-5 font-urbanist text-secondary">
        <div className="container p-2 mx-auto sm:p-4">
          <Title>Sellers</Title>
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
                {sellers?.map((seller) => (
                  <tr className="border-b border-opacity-20 border-gray-700 ">
                    <td className="p-3">
                      <p>{seller.name}</p>
                    </td>
                    <td className="p-3">
                      <p>{seller.email}</p>
                    </td>
                    <td className="p-3 text-center flex gap-2">
                      <label
                        onClick={() => handleUpdateSeller(seller)}
                        className={`btn-action ${
                          seller?.verifiedSeller &&
                          "disabled bg-info text-primary"
                        } px-3 py-1 border-none font-semibold  bg-accent text-white`}
                      >
                        {seller?.verifiedSeller ? "Verified" : "Verify"}
                      </label>
                      <label
                        htmlFor="confirmation-modal"
                        onClick={() => setDeleteUser(seller)}
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

        {deleteUser && (
          <ConfirmationModal
            data={deleteUser}
            handleCloseModal={handleCloseModal}
            handleDeleteData={handleDelete}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default AllSellers;
