import React from 'react';
import { TvShow } from '../../custom-types';

const SummaryNetwork: React.FC<TvShow> = ({ show }) => (
    <div className="summary-container-card">
        <p>Premiered: {show?.premiered ?? ' - '}</p>
        <p>Network: {show?.network?.name ?? ' - '}</p>
    </div>
);

export default SummaryNetwork;