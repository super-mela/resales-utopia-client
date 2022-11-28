import React, { useContext } from "react";
import { FiEye } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import IconWrapper from "../../../components/IconWrapper/IconWrapper";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProductsCard = ({
  setDeleteProduct,
  product,
  product: { _id, productName, sellingPrice, desc, postedOn, photoURL },
}) => {
  const { user } = useContext(AuthContext);
  // const [deleteProduct, setDeleteProduct] = useState(null);

  // const handleCloseModal = () => {
  //   setDeleteProduct(null);
  // };

  // const handleDelete = (data) => {
  //   instance.delete(`/products/${data._id}?email=${user.email}`).then((res) => {
  //     if (res.data.result.deletedCount) {
  //       toast.success("Deleted");
  //     }
  //   });
  // };

  return (
    <div className="relative card lg:h-[220px] lg:card-side bg-white rounded-sm border font-urbanist text-secondary">
      {/* badge */}
      <div className="badge badge-accent text-white absolute top-2 left-2 font-bold">
        Available
      </div>
      <figure className="border p-1">
        <img
          src={photoURL}
          alt="product"
          className="w-full lg:h-full h-[210px] object-scale-down"
        />
      </figure>
      <div className="card-body py-3 gap-0 pl-5 pr-0">
        <h2 className="card-title text-[22px] font-bold leading-6">
          {productName}
        </h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-3"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-3"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-3"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-3"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400 w-3"
          />
        </div>
        <p className="text-accent text-[17px] font-bold flex items-center gap-0">
          {sellingPrice}
          <TbCurrencyTaka className="w-4 h-4" />
        </p>
        <p className="text-[17px]">
          {desc.length > 20 ? `${desc.slice(0, 50)} ...` : desc}
        </p>
        <div className="card-actions justify-start my-2">
          <button>
            <IconWrapper>
              <FiEye className="text-white" dataTip="View" />
            </IconWrapper>
          </button>
          <label
            htmlFor="confirmation-modal"
            onClick={() => setDeleteProduct(product)}
          >
            <IconWrapper>
              <MdDeleteForever className="text-white" dataTip="Delete" />
            </IconWrapper>
          </label>
          <IconWrapper>
            <RiAdvertisementFill
              className="text-white"
              dataTip="Advertise item"
            />
          </IconWrapper>
        </div>
      </div>
    </div>
  );
};

export default MyProductsCard;
