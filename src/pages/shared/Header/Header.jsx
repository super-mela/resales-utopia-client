import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  // Navbar Scroll Effect
  const [scroll, setScroll] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then((res) => {
      localStorage.removeItem("accessToken");
      toast.success("See you again!");
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  // ActiveStyle
  const activeClassName =
    "text-primary flex items-center gap-1 bg-transparent border-b-2 lg:border-b-primary border-none";
  const inActiveClassName =
    "hover:text-primary flex items-center gap-1 hover:bg-transparent text-neutral";

  const menuItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          end
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Home
        </NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Dashboard
          <AiOutlineCaretDown />
        </NavLink>
        <ul className="p-2 bg-white">
          <li>
            <Link to={"/myorders"} className="border-b">
              My Order
            </Link>
          </li>
          <li>
            <Link to={"/addproduct"} className="border-b">
              Add A Product
            </Link>
          </li>
          <li>
            <Link to={"/myproducts"} className="border-b">
              My Products
            </Link>
          </li>
          <li>
            <Link to={"/mybuyers"} className="border-b">
              My Buyers
            </Link>
          </li>
          <li>
            <Link to={"/allsellers"} className="border-b">
              All Sellers
            </Link>
          </li>
          <li>
            <Link to={"/allbuyers"} className="border-b">
              All Buyers
            </Link>
          </li>
          <li>
            <Link to={"/reportedItems"} className="border-b">
              Reported Items
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="font-urbanist w-full absolute top-0 left-0 right-0">
      {/* top navigation */}
      <div className="flex justify-between text-sm text-white my-3 max-w-[1290px] mx-auto">
        <p className="font-mulish font-medium text-[14px] leading-[21px]">
          Get 50% discount offer <span className="text-accent">26 Days</span>
        </p>
        <div className="flex gap-4 items-center">
          <div className="avatar">
            <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" alt="profile" />
            </div>
          </div>

          {user && user?.uid ? (
            <button
              onClick={handleLogout}
              className="font-semibold leading-[21px] border-l-2 px-2 border-l-primary uppercase"
            >
              Log out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="font-semibold leading-[21px] border-l-2 px-2 border-l-primary uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      {/* top navigation end */}

      {/* main navigations */}
      <div
        className={`navbar min-h-[72px] z-10  h-[72px] bg-white max-w-[1290px] mx-auto lg:rounded-sm px-5 mt-4 text-neutral ${
          scroll && "fixed rounded-none top-[-20px] max-w-full"
        }`}
      >
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Menu Items */}
              {menuItems}
            </ul>
          </div>
          <Link className="flex gap-2 items-center font-mulish uppercase text-xl font-bold">
            <img
              src={logo}
              alt="logo"
              className="w-14 bg-primary rounded-full p-2"
            />
            Resalis Utopia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-[18px] font-medium">
            {/* menu Items */}
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
