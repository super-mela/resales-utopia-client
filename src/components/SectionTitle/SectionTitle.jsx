import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h1 className="text-3xl font-urbanist font-bold text-neutral leading-[63px] text-center my-10">
      {children}
    </h1>
  );
};

export default SectionTitle;
