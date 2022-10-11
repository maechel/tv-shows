import React from 'react';
import { sizeStyles, colorStyles } from './spinner-constants';
import { SpinnerProps } from '../../custom-types';
import './spinner.css';

const Spinner: React.FC<SpinnerProps> = ({ size = 'normal', color= 'primary' }) => {
    const styles = {
        ...sizeStyles[size],
    }

    styles.border += ` solid ${colorStyles[color].border}`;
    styles.borderTop += ` solid ${colorStyles[color].borderTop}`;

    return <div style={styles} className="loader"></div>;
}

export default Spinner;