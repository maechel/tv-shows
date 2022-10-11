import React from 'react';
import { TvShowItem } from '../../custom-types';

const SummaryNetwork: React.FC<TvShowItem> = ({ premiered, network }) => {
    return (
        <div className="summary-container-card">
            <p>Premiered: {premiered ?? ' - '}</p>
            <p>Network: {network?.name ?? ' - '}</p>
        </div>
    );
};

export default SummaryNetwork;