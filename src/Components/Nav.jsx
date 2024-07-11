import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="w-full p-4 bg-black text-white flex items-center  gap-5">
        <Link to={"/"}>
          <li>
            <p className="cursor-pointer">Home</p>

          </li>
        </Link>
        <Link to={'/Product'}>
          <li>
            <p className="cursor-pointer">Product</p>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
