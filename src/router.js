import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import Home from './components/home/Home';
import SearchResults from './components/searchResults/SearchResults';



export default (
    <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ SearchResults } path='/results' />
    </Switch>
)