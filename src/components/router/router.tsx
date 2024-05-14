import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layout";
import { Animals } from "../animals/animals";
import SpeciesPage from "../species_page/SpeciesPage";
import { Enclosures } from "../enclosures/enclosures";
import { Home } from "../home/home";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/enclosures" element={<Enclosures />} />
      </Route>
    </Routes>
  );
};
