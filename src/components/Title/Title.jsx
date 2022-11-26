import React from "react";

const Title = ({ children }) => {
  return (
    <div className="border-b-2">
      <h1 className="text-lg text-left uppercase inline border-b-4 border-b-primary font-semibold font-urbanist text-neutral">
        {children}
      </h1>
      {/* <hr className="w-[15%] bg-primary border-0 h-[3px]" /> */}
    </div>
  );
};

export default Title;
