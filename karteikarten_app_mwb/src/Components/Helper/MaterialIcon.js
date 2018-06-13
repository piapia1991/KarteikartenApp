import React from 'react';
import './MaterialIcon.css';


export const MaterialIcon = ({icon, className}) => (
    <i className={className ? className + ' material-icons' : 'material-icons'}>{icon}</i>
)