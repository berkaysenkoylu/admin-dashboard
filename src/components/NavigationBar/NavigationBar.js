import React from 'react';

import svg from '../../assets/images/sprite.svg';
import classes from './NavigationBar.module.scss';

const NavigationBar = () => {
    return (
        <nav className={classes.NavigationBar}>
            <div className={classes.NavigationBar__TopRight}>
                <div className={classes.NavigationBar__Logo}>
                    ADMIN
                </div>
            </div>

            <div className={classes.NavigationBar__TopLeft}>
                <div className={classes.NavigationBar__Item}>
                    <svg className={classes.NavigationBar__Icon}>
                        <use xlinkHref={`${svg}#icon-bell`}></use>
                    </svg>

                    <span className={classes.NavigationBar__Item__Count}>2</span>
                </div>
                <div className={classes.NavigationBar__Item}>
                    <svg className={classes.NavigationBar__Icon}>
                        <use xlinkHref={`${svg}#icon-sphere`}></use>
                    </svg>

                    <span className={classes.NavigationBar__Item__Count}>1</span>
                </div>
                <div className={classes.NavigationBar__Item}>
                    <svg className={classes.NavigationBar__Icon}>
                        <use xlinkHref={`${svg}#icon-cog`}></use>
                    </svg>
                </div>
                <figure className={classes.NavigationBar__Profile}>
                    <div className={classes.NavigationBar__Profile__Picture}></div>
                </figure>
            </div>
        </nav>
    )
}

export default NavigationBar;