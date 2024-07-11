import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/Product/product-detail");
  };
  const location = useLocation();
  const isProductDetail = location.pathname.includes("product-detail");
  return (
    <>
      {!isProductDetail && (
        <>
          <h1
            className="bg-gray-500 text-white text-center p-5"
            onClick={submit}
          >
            All Products
          </h1>
        </>
      )}
      <Outlet />
    </>
  );
};

export default Product;
