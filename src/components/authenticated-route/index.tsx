import * as React from 'react';
import { useAuthStore } from '../../stores';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface IAuthenticatedRouteProps {
    screen: JSX.Element;
}

const AuthenticatedRoute: React.FC<IAuthenticatedRouteProps & RouteProps> = ({ screen, ...rest }) => {
    const { currentUser } = useAuthStore();

    return (
        <Route
            {...rest}
            render={() => !!currentUser
                ? screen
                : <Redirect to={'/'} />
            }
        />
    );
}

export default AuthenticatedRoute;
