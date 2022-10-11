import React from 'react';
import { TvShowItem } from '../../custom-types';

const SummaryGenres: React.FC<TvShowItem> = ({ genres }) => {
    if (Array.isArray(genres)) {
        return (
            <div>
                <ul className="summary-genres">
                    {genres.map((genre) => (
                        <li key={genre} className="summary-genre">{genre}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};

export default SummaryGenres;