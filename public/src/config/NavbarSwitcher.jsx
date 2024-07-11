// NavbarSwitcher.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import SubHeader from "../components/header/subheader/SubHeader";
import { RoutePaths } from "./RoutePathConfig";

const NavbarSwitcher = () => {
  const location = useLocation();

  const mainRoutes = [
    RoutePaths.HOME,
    RoutePaths.HOTELS,
    RoutePaths.FLIGHTSHOTELS,
    RoutePaths.CRUISE,
  ];

  const isMainRoute = mainRoutes.includes(location.pathname);

  return <>{isMainRoute ? <Header /> : <SubHeader />}</>;
};

export default NavbarSwitcher;
