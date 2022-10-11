import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions, useTypedSelector } from '../hooks';
import { Spinner, ApplicationMessage, ShowDetails } from '../components';

const DetailsPage = () => {
    const { id } = useParams();
    const { fetchShowById } = useActions();
    const { show, loading, error } = useTypedSelector(({ shows }) => shows);

    useEffect(() => {
        if (id) {
            fetchShowById(id);
        }
    }, [id]);

    if (error) {
        return (
            <ApplicationMessage
                type="error"
                title="Something went wrong:"
                msg={error}
            />
        );
    }

    if (loading) {
        return <Spinner/>;
    }

    if (show === null) {
        return (
            <ApplicationMessage
                type="info"
                title="Information:"
                msg="Information about the show is currently unavailable."
            />
        );
    }

    return <ShowDetails {...show} />;
};

export default DetailsPage;