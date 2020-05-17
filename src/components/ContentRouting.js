import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home'

const ContentRouting = () => {

    return (
        <>
            <Switch> 
            <Route  path="/" component={Home} ></Route>                             
                <Route path="/home" component={Home} ></Route>                                                   
            </Switch>

        </>
    );
}
export default ContentRouting;