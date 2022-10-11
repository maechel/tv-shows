import React from 'react';
import { TvShow } from '../../custom-types';
import { useNavigate } from 'react-router-dom';
import './showlist.css';
import ImageSkeleton from '../ImageSkeleton';

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
                {show?.image?.medium ? (
                    <img className="showslistitem-img" src={show.image.medium} alt={`Image of tv-show ${show.name}`}/>
                ) : <ImageSkeleton size="medium" />}
            </div>
            <span>{show.name}</span>
        </li>
    );
};

export default ShowsListItem;