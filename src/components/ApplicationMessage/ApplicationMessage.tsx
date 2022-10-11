import React from 'react';
import { ErrorMessageProps } from '../../custom-types';
import './application-message.css';

const ApplicationMessage: React.FC<ErrorMessageProps> = ({ type, title, msg,  }) => {
    return (
        <div className={`message-container message-${type}`}>
            <h3 className="message-header">{title}</h3>
            <p className="message">{msg}</p>
        </div>
    );
};

export default ApplicationMessage;