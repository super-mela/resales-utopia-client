import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ProgressBar
        height="100"
        width="150"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3749BB"
        barColor="#3749BB"
      />
    </div>
  );
};

export default Preloader;
