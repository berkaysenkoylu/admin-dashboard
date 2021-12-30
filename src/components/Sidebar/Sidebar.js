import React from 'react';

import classes from './Sidebar.module.scss';
import AccordionMenu from './AccordionMenu/AccordionMenu';
import { dashboardData } from '../../assets/sidebar';

const Sidebar = () => {
    const dashBoardData = dashboardData;

    return (
        <div className={classes.Sidebar}>
            {dashBoardData.map((dashboardItem, index) => {
                return <AccordionMenu
                    key={index}
                    label={dashboardItem.name}
                    subItems={dashboardItem.subMenuItems}
                />;
            })}
        </div>
    )
}

export default Sidebar;