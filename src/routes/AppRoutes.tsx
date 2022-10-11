import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, DetailsPage } from '../pages';

const AppRoutes = () => (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/tv-shows/:id" element={<DetailsPage />} />
    </Routes>
);

export default AppRoutes;