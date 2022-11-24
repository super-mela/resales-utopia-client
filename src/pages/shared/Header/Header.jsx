import React, { useEffect, useState } from "react";
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
        <Link className="justify-between">
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
          <li>
            <Link>Submenu 1</Link>
          </li>
          <li>
            <Link>Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );
  return (
    <div className="font-urbanist w-full absolute top-0">
      {/* top navigation */}
      <div className="flex justify-between text-sm text-white my-3 max-w-[1290px] mx-auto">
        <p>
          Get 50% discount offer <span className="text-primary">26 Days</span>
        </p>
        <Link>Login</Link>
      </div>
      {/* main navigations */}
      <div
        className={`navbar min-h-[72px] h-[72px] bg-white text-black max-w-[1290px] mx-auto lg:rounded-sm px-5 mt-4 ${
          scroll && "fixed w-full rounded-none"
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
