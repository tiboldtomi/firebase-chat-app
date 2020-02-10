import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Login, Home, Register, Welcome } from '../../screens';
import { AuthenticatedRoute, Notification, LoaderBanner } from '../';
import { AppContainer, BottomCircle, InnerCircle, TopCircle } from './styles';
import { NotificationStoreProvider, LoaderBannerStoreProvider, AuthStoreProvider } from '../../stores';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {

    return (
        <AuthStoreProvider>
            <LoaderBannerStoreProvider>
                <NotificationStoreProvider>
                    <AppContainer>
                        <LoaderBanner />
                        <Notification />
                        <TopCircle>
                            <InnerCircle />
                        </TopCircle>
                        <BottomCircle>
                            <InnerCircle />
                        </BottomCircle>
                        <HashRouter basename="/">
                            <Switch>
                                <Route exact={true} path={'/'} render={() => <Welcome />} />
                                <Route exact={true} path={'/login'} render={() => <Login />} />
                                <Route exact={true} path={'/register'} render={() => <Register />} />
                                <AuthenticatedRoute exact={true} path={'/home'} screen={<Home />} />
                            </Switch>
                        </HashRouter>
                    </AppContainer>
                </NotificationStoreProvider>
            </LoaderBannerStoreProvider>
        </AuthStoreProvider>
    );
}


export default App;