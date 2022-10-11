import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, DetailsPage, FavouritesPage } from '../pages';

const AppRoutes = () => (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/tv-shows/:id" element={<DetailsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
);

export default AppRoutes;