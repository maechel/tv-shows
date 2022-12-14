import React from 'react';
import { useTypedSelector } from '../../hooks';
import { TvShow } from '../../custom-types';
import { ApplicationMessage, Spinner, ShowsListItem } from '../';
import './showlist.css';

const ShowsList: React.FC = () => {
    const { shows, loading, error } = useTypedSelector(({ shows }) => shows);

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
        if (Array.isArray(shows) && shows.length) {
            return shows.map((showItem: TvShow) =>
                <ShowsListItem key={showItem.show.id} {...showItem} />
            );
        } else if (Array.isArray(shows) && shows.length === 0) {
            return <ApplicationMessage
                type="info"
                msg="Sorry! The search came back empty. Try with another search term."
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

export default ShowsList;