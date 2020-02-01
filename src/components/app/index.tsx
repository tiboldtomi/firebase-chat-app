import * as React from 'react';
import { AuthenticatedRoute } from '../';
import { AppContainer, Circle, InnerCircle } from './styles';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Login, Home, Register, Welcome } from '../../screens';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {

    return (
        <AppContainer>
            <Circle>
                <InnerCircle />
            </Circle>
            <HashRouter basename="/">
                <Switch>
                    <Route exact={true} path={'/login'} render={() => <Login />} />
                    <Route exact={true} path={'/welcome'} render={() => <Welcome />} />
                    <Route exact={true} path={'/register'} render={() => <Register />} />
                    <AuthenticatedRoute exact={true} path={'/'} screen={<Home />} userLoggedIn={false} />
                </Switch>
            </HashRouter>
        </AppContainer>
    );
}


export default App;