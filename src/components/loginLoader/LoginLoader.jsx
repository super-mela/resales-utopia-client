import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoginLoader = () => {
  return (
    <ThreeDots
      height="10"
      width="50"
      radius="10"
      color="#ffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default LoginLoader;
