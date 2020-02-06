import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Login, Home, Register, Welcome } from '../../screens';
import { AuthenticatedRoute, Notification, LoaderBanner } from '../';
import { AppContainer, BottomCircle, InnerCircle, TopCircle } from './styles';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {

    return (
        <AppContainer>
            {/* <LoaderBanner /> */}
            <Notification />
            <TopCircle>
                <InnerCircle />
            </TopCircle>
            <BottomCircle>
                <InnerCircle />
            </BottomCircle>
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