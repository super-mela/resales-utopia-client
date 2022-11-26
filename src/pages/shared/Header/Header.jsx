import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/banner-img4.png";

const Header = () => {
  // Navbar Scroll Effect
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const menuItems = (
    <>
      <li>
        <NavLink to={"/"} className="bg-transparent">
          Home
        </NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink to={"/dashboard"} className="flex gap-1 bg-transparent">
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
            <Link to={"/myorders"} className="border-b">
              All Sellers
            </Link>
          </li>
          <li>
            <Link to={"/myorders"} className="border-b">
              All Buyers
            </Link>
          </li>
          <li>
            <Link to={"/myorders"} className="border-b">
              Reported Items
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <NavLink className="bg-transparent">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="font-urbanist w-full absolute top-0 left-0 right-0">
      {/* top navigation */}
      <div className="flex justify-between text-sm text-white my-3 max-w-[1290px] mx-auto">
        <p>
          Get 50% discount offer <span className="text-primary">26 Days</span>
        </p>
        <Link to={"/login"}>Login</Link>
      </div>
      {/* main navigations */}
      <div
        className={`navbar min-h-[72px] z-10  h-[72px] bg-white text-black max-w-[1290px] mx-auto lg:rounded-sm px-5 mt-4 ${
          scroll && "fixed rounded-none top-[-20px] max-w-full"
        }`}
      >
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
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
          <Link className="text-xl flex gap-2 items-center">
            <img src={logo} alt="logo" className="w-14" />
            Resalis Utopia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-[18px] font-medium">
            {/* menu Items */}
            {menuItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
