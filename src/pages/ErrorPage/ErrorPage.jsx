import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex lg:flex-row flex-col-reverse justify-around mx-auto h-screen items-center">
      {/* error message */}
      <div className="flex flex-col gap-5 lg:w-1/3 w-full lg:text-left text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <h3 className="text-3xl uppercase">
          Page {error.statusText || error.message}
        </h3>
        <p>
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <Link to={"/"} className="btn uppercase">
          Go Home
        </Link>
      </div>

      {/* gif */}
      <div>
        <img
          src="https://envato.ukie.company/404-error/monkey/assets/img/monkey.gif"
          alt="errorImage"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
