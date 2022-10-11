import React, { useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
import { ApplicationMessage, Spinner, ShowsListItem } from '../';
import { TvShow } from '../../custom-types';
import './showlist.css';

const FavouritesList: React.FC = () => {
    const { fetchAllFavourites } = useActions();
    const { favourites, loading, error } = useTypedSelector(({ shows }) => shows);

    useEffect(() => {
        fetchAllFavourites();
    }, []);

    if (error) {
        return <ApplicationMessage
            type="error"
            title="Something went wrong:"
            msg={error}
        />
    }

    if (loading) {
        return <Spinner />
    }

    const renderShows = () => {
        if (Array.isArray(favourites) && favourites.length) {
            return favourites.map((tvShowItem: TvShow) => {
                return (
                    <ShowsListItem key={tvShowItem.show.id} {...tvShowItem} />
                );
            });
        } else if (Array.isArray(favourites) && favourites.length === 0) {
            return <ApplicationMessage
                type="info"
                msg="Nothing to see here! Go back and add a tv-show to the list."
                title="Information"
            />;
        }

        return null;
    }

    return (
        <div className="showslist-container">
            <ul className="showslist">
                {renderShows()}
            </ul>
        </div>
    );
};

export default FavouritesList;