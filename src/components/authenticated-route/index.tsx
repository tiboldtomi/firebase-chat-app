import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface IAuthenticatedRouteProps {
    userLoggedIn: boolean;
    screen: JSX.Element;
}

const AuthenticatedRoute: React.FC<IAuthenticatedRouteProps & RouteProps> = ({ userLoggedIn, screen, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => userLoggedIn
                ? screen
                : <Redirect to={'/welcome'} />
            }
        />
    );
}

export default AuthenticatedRoute;
