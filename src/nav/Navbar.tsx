import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item" onClick={() => navigate('/')}>Home</li>
                    <li className="nav-item" onClick={() => navigate('/favourites')}>Favourites</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;