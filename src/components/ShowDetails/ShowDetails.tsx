import React from 'react';
import { TvShow } from '../../custom-types';
import { DetailsSummary, ShowImage } from '../../components';
import './show-details.css';

const ShowDetails: React.FC<TvShow> = (tvShowItem: TvShow) => (
    <div className="details-container">
        <div className="details-image">
            <ShowImage show={tvShowItem.show} size="original"/>
        </div>
        <DetailsSummary {...tvShowItem} />
    </div>
);

export default ShowDetails;