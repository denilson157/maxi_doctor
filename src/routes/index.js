import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import { Home, MaxDoctor } from '../components'


const Routes = () =>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/maxdoctor" component={MaxDoctor} />
        <Route path='*' component={Home} />
    </Switch>


export default Routes;