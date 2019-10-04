import { Route , Switch} from 'react-router-dom';
import React from 'react';
import LoginPage from "./commons/containers/loginPage";
import ROUTES from './commons/routes/constants';

const Routes : React.SFC=()=>(

    <Switch>
        <Route  exact path={ROUTES.LOGIN} component={LoginPage}/>


          </Switch>


)
export default Routes;