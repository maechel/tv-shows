import React from 'react';
import { TvShowItem } from '../../custom-types';
import { DetailsSummary, ShowImage } from '../../components';
import './show-details.css';

const ShowDetails: React.FC<TvShowItem> = (props) => {
    return (
        <div className="details-container">
            <div className="details-image">
                <ShowImage show={props} size="original" />
            </div>
            <DetailsSummary {...props} />
        </div>
    );
};

export default ShowDetails;