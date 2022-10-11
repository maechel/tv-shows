import React from 'react';
import { SearchInput, ShowsList } from '../components';

const HomePage = () => {
    return (
        <div className="main">
            <SearchInput />
            <ShowsList />
        </div>
    );
};

export default HomePage;