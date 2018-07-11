import React from 'react';
import {NavLink} from 'react-router-dom';
import './HeaderButtonComponent.css';
import {Button, Icon, Typography, Grid} from '@material-ui/core';

export const HeaderButtonComponent = ({link, icon, title}) => (
    <NavLink activeClassName="active" to={link} exact>
        <Button variant="text" aria-label={icon}>
            <Grid container direction={'column'}>
                <Grid item>
                    <Icon>
                        {icon}
                    </Icon>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="inherit">
                        {title ? title : ''}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    </NavLink>
);