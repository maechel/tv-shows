import React from 'react';
import { TvShow } from '../../custom-types';
import { useNavigate } from 'react-router-dom';
import { ShowImage } from '../';
import './showlist.css';

const ShowsListItem: React.FC<TvShow> = ({ show, score }) => {
    const navigate = useNavigate();

    const onClickHandler = (id: number) => () => {
        navigate(`/tv-shows/${id}`);
    };

    return (
        <li
            key={show.id}
            className="showslistitem"
            onClick={onClickHandler(show.id)}
        >
            <div>
                <ShowImage show={show} size="medium" />
            </div>
            <span>{show.name}</span>
        </li>
    );
};

export default ShowsListItem;