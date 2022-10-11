import React from 'react';
import DOMPurify from 'dompurify';
import { TvShowItem } from '../../custom-types';

const SummaryDescription: React.FC<TvShowItem> = ({ summary }) => {
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(summary),
    });

    return <div className="summary-description" dangerouslySetInnerHTML={sanitizedData()}/>;
};

export default SummaryDescription;