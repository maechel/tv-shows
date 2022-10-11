import React from 'react';
import { TvShowItem } from '../../custom-types';

const SummaryDateAndTime: React.FC<TvShowItem> = ({ schedule, runtime }) => {
    return (
        <div className="summary-container-card">
            <p>Airs at: {schedule?.time ?? ' - '}</p>
            <p>Days: {schedule?.days?.join(', ') ?? ' - '}</p>
            <p>Runtime: {runtime ? ` ${runtime} mins` : ' - '}</p>
        </div>
    );
};

export default SummaryDateAndTime;