import React from 'react';
import { TvShow } from '../../custom-types';

const SummaryRating: React.FC<TvShow> = (tvShowItem: TvShow) => {
    const { show } = tvShowItem;
    return (
        <div className="summary-container-card">
            <p>Rating: {show?.rating?.average ?? ' - '}</p>
        </div>
    );
};

export default SummaryRating;