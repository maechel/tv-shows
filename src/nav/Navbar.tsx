import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { useActions } from '../hooks';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { clearError } = useActions();

    const handleNavigation = (path: string) => {
        clearError();
        navigate(path);
    };

    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item" onClick={() => handleNavigation('/')}>Home</li>
                    <li className="nav-item" onClick={() => handleNavigation('/favourites')}>Favourites</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;