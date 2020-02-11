import * as React from 'react';
import { useAuthStore } from '../../stores';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface IUnauthorizedRouteProps {
    screen: JSX.Element;
}

const UnauthorizedRoute: React.FC<IUnauthorizedRouteProps & RouteProps> = ({ screen, ...rest }) => {
    const { currentUser } = useAuthStore();

    return (
        <Route
            {...rest}
            render={
                () => !!currentUser
                    ? <Redirect to={'/home'} />
                    : screen
            }
        />
    );
}

export default UnauthorizedRoute;