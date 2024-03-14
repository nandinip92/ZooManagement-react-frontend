import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layout";
import { Animals } from "../animals/animals";
import { Species } from "../species/species";
import { Enclosures } from "../enclosures/enclosures";
import { Home } from "../home/home";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/species" element={<Species />} />
        <Route path="/enclosure" element={<Enclosures />} />
      </Route>
    </Routes>
  );
};
