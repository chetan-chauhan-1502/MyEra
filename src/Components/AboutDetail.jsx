import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AboutDetail = () => {
  const navigate = useNavigate();
  const submit = () => {
    // / below this change i forgate
    navigate("/about/about-detail/about-price");
  };
  const location = useLocation();

  const isabouPrice = location.pathname.includes("about-price");
  return (
    <>
      {!isabouPrice && (
        <>
          <h1
            className="bg-red-500 p-4 text-white text-center text-5xl "
            onClick={submit}
          >
            about Detail
          </h1>
        </>
      )}
      {/* and this forgate also  */}
      <Outlet/>
    </>
  );
};

export default AboutDetail;
