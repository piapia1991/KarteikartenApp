import React from 'react';
import {NavLink} from 'react-router-dom';
import './HeaderButtonComponent.css';
import {MaterialIcon} from "../Helper/MaterialIcon";


export const HeaderButtonComponent = ({link, icon, title}) => (
    <NavLink activeClassName="active" to={link} exact>
            <MaterialIcon icon={icon} title={title}/>
    </NavLink>
)