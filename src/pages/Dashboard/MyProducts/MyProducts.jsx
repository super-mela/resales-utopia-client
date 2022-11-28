import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import TopBanner from "../../../components/TopBanner/TopBanner";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { instance } from "../../../utils/AxiosInstance";
import ConfirmationModal from "../../shared/ConfirmationModal/ConfirmationModal";
import Preloader from "../../shared/Preloader/Preloader";
import MyProductsCard from "../MyProductsCard/MyProductsCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const handleCloseModal = () => {
    setDeleteProduct(null);
  };

  const handleDelete = (data) => {
    instance.delete(`/products/${data._id}?email=${user.email}`).then((res) => {
      if (res.data.result.deletedCount) {
        toast.success("Deleted");
        setDeleteProduct(null);
        refetch();
      }
    });
  };
  // load products
  const {
    data: { products } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `https://resales-utopia-server.vercel.app/products?email=${user.email}`,
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

  return (
    <div>
      <TopBanner>My Products</TopBanner>

      <div className="lg:px-24 py-10 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {products.length ? (
          products.map((product) => (
            <MyProductsCard
              key={product._id}
              product={product}
              setDeleteProduct={setDeleteProduct}
            ></MyProductsCard>
          ))
        ) : (
          <h1>No proudcts to show</h1>
        )}
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

export default MyProducts;
