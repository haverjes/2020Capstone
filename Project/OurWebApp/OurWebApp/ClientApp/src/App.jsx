import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { UserTest } from "./components/UserTest";
import { CustHome } from "./components/CustHome";
import { DispatchHome } from "./components/DispatchHome";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./views/Profile";
import './custom.css';

import Loading from "./components/Loading";

const App = () => {
    const { loading } = useAuth0();

    if (loading) {
        return <Loading />;
    }

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/userMan" component={UserTest} />
            <Route path="/custHome" component={CustHome} />
            <Route path="/dispatchHome" component={DispatchHome} />
        </Layout>
    );
};

export default App;
