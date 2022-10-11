import React from 'react';
import { TvShow } from '../../custom-types';
import { DetailsSummary, ShowImage } from '../../components';
import './show-details.css';
import { addShowToFavourites } from '../../redux/action-creators';

const ShowDetails: React.FC<TvShow> = (tvShowItem: TvShow) => {
    const onAddToFavouritesClickHandler = (tvShow: TvShow) => () => {
        addShowToFavourites(tvShow);
    };

    return (
        <div className="details-container">
            <div className="details-image">
                <ShowImage show={tvShowItem.show} size="original" />
            </div>
            <DetailsSummary {...tvShowItem} />
        </div>
    );
};

export default ShowDetails;