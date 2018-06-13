import React from 'react';
import {NavLink} from 'react-router-dom';
import {MaterialIcon} from "./Helper/MaterialIcon";


export const HeaderButtonComponent = ({link, icon, title}) => (
    <NavLink className="navbar-brand col-sm col-md-6 mr-0 headerButton"  activeClassName="active" to={link} exact>
        <div className="d-flex justify-content-center">
            <MaterialIcon icon={icon}/>

        </div>
        <div className="text-center">{title}</div>
    </NavLink>
)