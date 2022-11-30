import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-center bg-cover bg-no-repeat font-urbanist h-[350px] flex flex-col gap-2 justify-center items-center bg-white">
      <h2 className="text-3xl text-secondary  font-bold">Join To NewLetter</h2>
      <p className="text-[20px]">
        Join our newsletter if you have any thing to tell us.
      </p>

      <div className="flex justify-center items-center mt-5">
        <input
          type="text"
          name=""
          className="bg-gray-200 px-2 py-1"
          placeholder="Your email here"
        />
        <button className="bg-primary text-white px-4 py-1 font-bold">
          Send
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
