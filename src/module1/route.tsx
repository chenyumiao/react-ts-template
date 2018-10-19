import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import List from './containers/List';
import Detail from './containers/Detail';

const routes = (
    <HashRouter>
        <div>
            <Route exact path="/" component={List}/>
            <Route path="/detail" component={Detail}/>
        </div>
    </HashRouter>
);
export default routes;