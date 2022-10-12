import React from 'react';
import { TvShow } from '../../custom-types';
import { SummaryGenres, SummaryDescription, SummaryNetwork, SummaryDateAndTime, SummaryRating } from '../../components';
import './show-details.css';

const DetailsSummary: React.FC<TvShow> = (tvShowItem: TvShow) => (
    <div className="summary">
        <h1 className="summary-header">{tvShowItem.show.name}</h1>
        <SummaryGenres {...tvShowItem} />
        <SummaryDescription {...tvShowItem} />
        <div className="summary-container">
            <SummaryNetwork {...tvShowItem} />
            <SummaryDateAndTime {...tvShowItem} />
            <SummaryRating {...tvShowItem} />
        </div>
    </div>
);

export default DetailsSummary;