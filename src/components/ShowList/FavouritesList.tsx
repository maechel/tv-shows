import React from 'react';
import { useTypedSelector } from '../../hooks';
import { ApplicationMessage, Spinner, ShowsListItem } from '../';
import './showlist.css';

const FavouritesList: React.FC = () => {
    const { favourites, loading, error } = useTypedSelector(({ shows }) => shows);

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
            return favourites.map(({ show, score }) => {
                return (
                    <ShowsListItem key={show.id} show={show} score={score} />
                );
            });
        } else if (Array.isArray(favourites) && favourites.length === 0) {
            return <ApplicationMessage
                type="info"
                msg="Nothing to see yet! Go back and add a tv-show to the list."
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