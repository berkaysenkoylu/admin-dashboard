import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import{ userData } from '../../../assets/data';
import classes from './UserGraph.module.scss';

const UserGraph = () => {
    const data = userData;

    return (
        <div className={classes.UserGraph}>
            <header className={classes.UserGraph__Header}>
                <h2>Active User Details</h2>
            </header>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="Active User"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="Active User" stroke="#000000" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserGraph;