import React from 'react';
import { TvShow } from '../../custom-types';

const SummaryDateAndTime: React.FC<TvShow> = ({ show }) => (
    <div className="summary-container-card">
        <p>Airs at: {show?.schedule?.time ?? ' - '}</p>
        <p>Days: {show?.schedule?.days?.join(', ') ?? ' - '}</p>
        <p>Runtime: {show?.runtime ? ` ${show.runtime} mins` : ' - '}</p>
    </div>
);


export default SummaryDateAndTime;