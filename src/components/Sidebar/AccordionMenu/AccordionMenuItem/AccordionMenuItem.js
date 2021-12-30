import React from 'react';
import { NavLink } from 'react-router-dom';

import svg from '../../../../assets/images/sprite.svg';
import classes from './AccordionMenuItem.module.scss';

const AccordionMenuItem = props => {
    let data = props.data;

    // TODO: Include the react router

    return (
        <li className={classes.AccordionMenuItem}>
            <svg className={classes.AccordionMenuItem__Icon}>
                <use xlinkHref={`${svg}#icon-${data.icon}`}></use>
            </svg>

            <span className={classes.AccordionMenuItem__Label}>
                <NavLink
                    to={data.path}
                    className={({ isActive }) =>
                        (isActive ? classes.AccordionMenuItem__ActiveLink : classes.AccordionMenuItem__Link)}
                >{data.name}</NavLink>
            </span>
        </li>
    )
}

export default AccordionMenuItem;