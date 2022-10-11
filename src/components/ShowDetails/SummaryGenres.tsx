import React from 'react';
import { TvShow } from '../../custom-types';

const SummaryGenres: React.FC<TvShow> = (tvShowItem: TvShow) => {
    const { show } = tvShowItem;
    if (Array.isArray(show.genres)) {
        return (
            <div>
                <ul className="summary-genres">
                    {show.genres.map((genre) => (
                        <li key={genre} className="summary-genre">{genre}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};

export default SummaryGenres;