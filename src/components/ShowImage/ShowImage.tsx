import React from 'react';
import { ShowImageProps } from '../../custom-types';
import { ImageSkeleton } from '../ImageSkeleton';
import './show-image.css';

const ShowImage: React.FC<ShowImageProps> = ({ show, size }) => {
    if (!show?.image?.[size]) {
        return <ImageSkeleton size={size}/>;
    }

    return (
        <img
            className={`show-image image-${size}`}
            src={show.image[size]}
            alt={`Image of tv-show ${show?.name ?? ''}`}
        />
    );
};

export default ShowImage;