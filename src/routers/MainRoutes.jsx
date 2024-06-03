import React from "react";
import { Route, Routes } from "react-router-dom";
// import Alerts from "../components/Alerts/Alerts";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import MainPage from "../pages/MainPage/MainPage";
import ChoiceCatalog from "../pages/ChoiceCatalog/ChoiceCatalog";
import SalePage from "../pages/SalePage/SalePage";
import EveryClothPage from "../pages/EveryClothPage/EveryClothPage";
import BasketPage from "../pages/BasketPage/BasketPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route element={<MainLayouts />}>
          <Route path="/catalog" element={<ChoiceCatalog />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/every/:id" element={<EveryClothPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      {/* {true && <Preloader />} */}
      {/* <Alerts /> */}
    </>
  );
};
export default MainRoutes;
