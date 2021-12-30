import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
    const routes = (
        <Routes>
            <Route exact path='/manage' element={<div>MANAGE</div>} />
            <Route exact path='/analytics' element={<div>ANALAYTICS</div>} />
            <Route exact path='/reports' element={<div>REPORTS</div>} />
            <Route exact path='/mail' element={<div>MAIL</div>} />
            <Route exact path='/feedback' element={<div>FEEDBACK</div>} />
            <Route exact path='/messages' element={<div>MESSAGES</div>} />
            <Route exact path='/user' element={<div>USERS</div>} />
            <Route exact path='/products' element={<div>PRODUCTS</div>} />
            <Route exact path='/transactions' element={<div>TRANSACTIONS</div>} />
            <Route exact path='/reports' element={<div>REPORTS</div>} />
            <Route exact path='/sales' element={<div>SALES</div>} />
            <Route exact path='/analytics' element={<div>ANALYTICS</div>} />
            <Route exact path='/' element={<Home />} />
        </Routes>
    );

    return (
        <div>
            <Layout>
                {routes}
            </ Layout>
        </div>
    )
}

export default App;