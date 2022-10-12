import React from 'react';
import { TvShow } from '../../custom-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { ShowImage } from '../';
import { useActions, useTypedSelector } from '../../hooks';
import './showlist.css';
import DOMPurify from 'dompurify';

const ShowsListItem: React.FC<TvShow> = (props) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { favourites } = useTypedSelector(({ shows }) => shows);
    const { addShowToFavourites, removeShowFromFavourites } = useActions();

    const isOnFavouritePath = pathname === '/favourites';
    const btnDisabled = (
        !isOnFavouritePath &&
        !!favourites.find((favourite: TvShow) => favourite.show.id === props.show.id)
    );

    const onClickHandler = (id: number) => (event: any) => {
        event.preventDefault();
        navigate(`/tv-shows/${id}`);
    };

    const handleFavourites = (tvShow: TvShow) => (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        if (isOnFavouritePath) {
            removeShowFromFavourites(tvShow.show.id);
        } else {
            addShowToFavourites(tvShow);
        }
    };

    const renderBtnIcon = () =>
        isOnFavouritePath
            ? <FaTimes/>
            : <MdFavoriteBorder/>;

    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(props.show.summary),
    });

    return (
        <li
            key={props.show.id}
            className="showslistitem"
            onClick={onClickHandler(props.show.id)}
        >
            <div className="showslistitem-content">
                <ShowImage show={props.show} size="medium"/>
                <span className="showlistitem-title">{props.show.name}</span>
                <small className="showlistitem-summary" dangerouslySetInnerHTML={sanitizedData()} />
            </div>
            <div>
                <button
                    className={`showlistitem-btn ${isOnFavouritePath ? 'btn-delete' : 'btn-add'}`}
                    disabled={btnDisabled}
                    onClick={handleFavourites(props)}
                >
                    {renderBtnIcon()}
                </button>
            </div>
        </li>
    );
};

export default ShowsListItem;