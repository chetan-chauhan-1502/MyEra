import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footers from "../components/footer/Footers";
import Home from "../views/home/Home";
import Hotel from "../views/hotel/Hotel";
import FlightsHotel from "../views/flights_hotel/FlightsHotel";
import Cruise from "../views/cruise/Cruise";
import MyProfile from "../views/myProfile/MyProfile";
import Myaccount from "../views/my_account/Myaccount";
import Holiday_packges from "../views/holiday_pacakges/Holiday_packges";
import { RoutePaths } from "../config/RoutePathConfig";
import NavbarSwitcher from "../config/NavbarSwitcher";
import HotelList from "../views/hotel/hotel_list/HotelList";
import CruiseLines from "../views/CruiseLines/CruiseLines";
import CruiseInfo from "../views/CruiseInfo/CruiseInfo";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarSwitcher />
        <Routes>
          {/* home */}
          <Route path={RoutePaths.HOME} element={<Home />} />
          {/* Hotel */}
          <Route path={RoutePaths.HOTELS} element={<Hotel />}>
            <Route
              path={RoutePaths.HOTEL_LISTING}
              element={<HotelList />}
            ></Route>
          </Route>
          {/* Hotel */}
          <Route path={RoutePaths.FLIGHTSHOTELS} element={<FlightsHotel />} />
          {/* Hotel */}
          <Route path={RoutePaths.CRUISE} element={<Cruise />} />
          {/* Hotel */}
          {/* <Route path={RoutePaths.CAR} element={<Hotel />} /> */}
          {/* Hotel */}
          <Route path={RoutePaths.TRANSFER} element={<Hotel />} />
          <Route path={RoutePaths.MYPROFILE} element={<MyProfile />} />
          <Route path={RoutePaths.CRUISELINES} element={<CruiseLines />} />
          <Route path={RoutePaths.CRUISEINFO} element={<CruiseInfo />} />
          {/* <Route path={RoutePaths.TRANSFER} element={<Hotel />} /> */}
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
