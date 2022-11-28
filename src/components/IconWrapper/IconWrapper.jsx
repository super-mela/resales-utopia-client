import React from "react";

const IconWrapper = ({ children }) => {
  return (
    <div
      className="rounded-full tooltip p-2 bg-primary hover:bg-secondary cursor-pointer tooltip-secondary"
      data-tip={children.props.dataTip}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
