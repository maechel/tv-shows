import React from 'react';
import { TvShow } from '../../custom-types';
import { useNavigate } from 'react-router-dom';
import { ShowImage } from '../';
import './showlist.css';

const ShowsListItem: React.FC<TvShow> = (props) => {
    const navigate = useNavigate();

    const onClickHandler = (id: number) => () => {
        navigate(`/tv-shows/${id}`);
    };

    return (
        <li
            key={props.show.id}
            className="showslistitem"
            onClick={onClickHandler(props.show.id)}
        >
            <div>
                <ShowImage show={props.show} size="medium" />
            </div>
            <span>{props.show.name}</span>
        </li>
    );
};

export default ShowsListItem;