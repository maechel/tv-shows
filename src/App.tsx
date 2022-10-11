import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './nav/Navbar';
import './App.css';

const App = () => (
    <div className="grid-container">
        <Navbar/>
        <AppRoutes/>
    </div>
);

export default App;
