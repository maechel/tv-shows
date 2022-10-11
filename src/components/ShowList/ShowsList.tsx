import React from 'react';
import ShowsListItem from './ShowsListItem';
import { TvShow } from '../../custom-types';
import { useTypedSelector } from '../../hooks';


const ShowsList: React.FC = () => {
    const { shows, loading, error } = useTypedSelector(({ shows }) => shows);

    const renderShows = () => {
        if (Array.isArray(shows) && shows.length) {
            return shows.map(({ show, score }) => {
                return (
                    <ShowsListItem key={show.id} show={show} score={score} />
                );
            });
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

export default ShowsList;