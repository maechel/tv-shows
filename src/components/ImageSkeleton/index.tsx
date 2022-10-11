import React from 'react';
import './image-skeleton.css';

interface ImageSkeletonProps {
    size: 'medium' | 'original';
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ size = 'medium' }) => {
    return <div className={`img-skeleton-${size}`} />;
};

export default ImageSkeleton;