import React from 'react';
import { TvShowItem } from '../../custom-types';
import { SummaryGenres, SummaryDescription, SummaryNetwork, SummaryDateAndTime, SummaryRating } from '../../components';
import './show-details.css';

const DetailsSummary: React.FC<TvShowItem> = (props) => {
    return (
        <div className="summary">
            <h1 className="summary-header">{props.name}</h1>
            <SummaryGenres {...props} />
            <SummaryDescription {...props} />
            <div className="summary-container">
                <SummaryNetwork {...props} />
                <SummaryDateAndTime {...props} />
                <SummaryRating {...props} />
            </div>
        </div>
    );
};

export default DetailsSummary;