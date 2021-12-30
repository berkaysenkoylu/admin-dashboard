import React from 'react';

import classes from './Home.module.scss';
import FeaturedInfo from './FeaturedInfo/FeaturedInfo';
import UserGraph from './UserGraph/UserGraph';

const Home = () => {
    return (
        <section className={classes.Home}>
            <FeaturedInfo />

            <UserGraph />

            <div style={{'gridArea': 'item3'}}>
                NEWS
            </div>
        </section>
    )
}

export default Home;