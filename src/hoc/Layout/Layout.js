import React, { Fragment } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Layout = props => {
    const style = {
        height: 'calc(100vh - 7rem)',
        display: 'flex',
    };

    return (
        <Fragment>
            <NavigationBar />
            
            <section style={style}>
                <Sidebar />

                {props.children}
            </section>
        </Fragment>
    )
}

export default Layout;