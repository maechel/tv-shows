import React from 'react';
import DOMPurify from 'dompurify';
import { TvShow } from '../../custom-types';

const SummaryDescription: React.FC<TvShow> = ({ show }) => {
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(show.summary),
    });

    return <div className="summary-description" dangerouslySetInnerHTML={sanitizedData()}/>;
};

export default SummaryDescription;