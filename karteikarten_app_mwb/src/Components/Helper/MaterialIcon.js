import React from 'react';
import './MaterialIcon.css';
import {Button, Icon, Typography} from '@material-ui/core';




export const MaterialIcon = ({icon, className, title}) => (
    <Button variant="extendedFab" aria-label={icon}>
        <Icon className={className ? className : 'material-icons'}>
            {icon}
        </Icon>
        <Typography variant="body2" color="inherit">
            {title ? title : ''}
        </Typography>
    </Button>
)