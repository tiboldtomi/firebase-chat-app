import * as React from 'react';
import { useAuthStore } from '../../stores';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface IAuthorizedRouteProps {
    screen: JSX.Element;
}

const AuthorizedRoute: React.FC<IAuthorizedRouteProps & RouteProps> = ({ screen, ...rest }) => {
    const { currentUser } = useAuthStore();

    return (
        <Route
            {...rest}
            render={
                () => !!currentUser
                    ? screen
                    : <Redirect to={'/'} />
            }
        />
    );
}

export default AuthorizedRoute;