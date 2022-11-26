import React from "react";

const IconWrapper = ({ children }) => {
  console.log(
    "🚀 ~ file: IconWrapper.jsx ~ line 4 ~ IconWrapper ~ dataTip",
    children.props.dataTip
  );
  return (
    <div
      className="rounded-full tooltip p-2 bg-secondary cursor-pointer tooltip-secondary"
      data-tip={children.props.dataTip}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
