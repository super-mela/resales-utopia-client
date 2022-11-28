import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useUserType from "../../hooks/useUserType/useUserType";
import Preloader from "../../pages/shared/Preloader/Preloader";

const SellerRoutes = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const [userType, userTypeLoading] = useUserType(user?.email);

  if (userTypeLoading) {
    return <Preloader></Preloader>;
  }

  if (user && user?.uid && userType === "Seller") {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default SellerRoutes;
