import React from 'react';
import { TvShowItem } from '../../custom-types';

const SummaryRating: React.FC<TvShowItem> = ({ rating }) => {
    return (
        <div className="summary-container-card">
            <p>Rating: {rating?.average ?? ' - '}</p>
        </div>
    );
};

export default SummaryRating;