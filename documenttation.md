import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductDetail from "./Components/ProductDetail";
import About from "../src/Components/About";
import AboutDetail from "../src/Components/AboutDetail";
import AboutPrice from "./Components/AboutPrice";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />}>
          <Route path="product-detail" element={<ProductDetail />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="about-detail" element={<AboutDetail />}>
            <Route path="about-price" element={<AboutPrice />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// below is dynamic routing

// xyz.com/productDetail/p1 => p1 Product detail
// xyz.com/productDetail/p2 => p2 Product detail
// xyz.com/productDetail/:<any value>  => p2 Product detail




import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const submitt = () => {
    navigate("/about/about-detail");
  };

  const location = useLocation();
  const isaboutDetail = location.pathname.includes("about-detail");
  return (
    <>
      {!isaboutDetail && (
        <>
          <h1
            className="bg-red-500 p-4 text-white text-center text-5xl "
            onClick={submitt}
          >
            about
          </h1>
        </>
      )}
      <Outlet />
    </>
  );
};

export default About;






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











import React from 'react'

const AboutPrice = () => {
  return (
   <>
    <h1 className='bg-red-500 text-white text-3xl text-center p-4'>About Pricing</h1>
   </>
  )
}

export default AboutPrice







