import React from 'react';
import {NavLink} from 'react-router-dom';
import './HeaderButtonComponent.css';
import {Button, Icon, Typography} from '@material-ui/core';

export const HeaderButtonComponent = ({link, icon, title}) => (
    <NavLink activeClassName="active" to={link} exact>
        <Button variant="text" aria-label={icon}>
            <Icon>
                {icon}
            </Icon>
            <Typography variant="body2" color="inherit">
                {title ? title : ''}
            </Typography>
        </Button>
    </NavLink>
);