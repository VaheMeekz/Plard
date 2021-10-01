import React from "react";
import {isAuthRoutes, notAuthRoutes} from "../../utils/routes";
import {Redirect, Route, Switch} from "react-router-dom";
import {HOME_PAGE, LOGIN_PAGE} from "../../utils/urls";

const Routes = () => {

    let token = localStorage.getItem('token')
    return <Switch>
        {
            token && isAuthRoutes.map(({path,component,id}) => {
                return <Route key={id} path={path} component={component} />
            })
        }
        {
            notAuthRoutes.map(({path,component,id}) => {
                return <Route key={id} path={path} component={component} exact/>
            })
        }
        <Redirect to={token ? HOME_PAGE: LOGIN_PAGE} exact/>
    </Switch>
}

export default Routes