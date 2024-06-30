import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts/MainLayouts';
import SalePage from '../pages/SalePage/SalePage';
import EveryClothPage from '../pages/EveryClothPage/EveryClothPage';
import BasketPage from '../pages/BasketPage/BasketPage';
import DecorZakazPage from '../pages/DecorZakazPage/DecorZakazPage';
import { Preloader } from '../common/Preloader/Preloader';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route element={<MainLayouts />}>
          {/* <Route path="/catalog" element={<ChoiceCatalog />} /> */}
          <Route path="/" element={<SalePage />} />
          <Route path="/every/:id" element={<EveryClothPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/decor" element={<DecorZakazPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      <Preloader />
    </>
  );
};
export default MainRoutes;
