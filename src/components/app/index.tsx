import * as React from 'react';
import { useFirebase } from '../../utils';
import { HashRouter, Switch } from 'react-router-dom';
import { Login, Home, Register, Welcome } from '../../screens';
import { AuthorizedRoute, UnauthorizedRoute, Notification, LoaderBanner } from '../';
import { AppContainer, BottomCircle, InnerCircle, TopCircle } from './styles';
import { NotificationStoreProvider, LoaderBannerStoreProvider, AuthStoreProvider } from '../../stores';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {

    const { isInitialized } = useFirebase();
    const [firebaseInitialized, setFirebaseInitialized] = React.useState<boolean>(false);

    React.useEffect(() => {
        isInitialized()
            .then(() => setFirebaseInitialized(true));
        // eslint-disable-next-line
    }, []);

    return (
        <AuthStoreProvider>
            <LoaderBannerStoreProvider>
                <NotificationStoreProvider>
                    <AppContainer>
                        <LoaderBanner forceShow={!firebaseInitialized} />
                        <Notification />
                        <TopCircle>
                            <InnerCircle />
                        </TopCircle>
                        <BottomCircle>
                            <InnerCircle />
                        </BottomCircle>
                        {firebaseInitialized
                            ? <HashRouter basename="/">
                                <Switch>
                                    <AuthorizedRoute exact={true} path={'/home'} screen={<Home />} />
                                    <UnauthorizedRoute exact={true} path={'/'} screen={<Welcome />} />
                                    <UnauthorizedRoute exact={true} path={'/login'} screen={<Login />} />
                                    <UnauthorizedRoute exact={true} path={'/register'} screen={<Register />} />
                                </Switch>
                            </HashRouter>
                            : <></>
                        }
                    </AppContainer>
                </NotificationStoreProvider>
            </LoaderBannerStoreProvider>
        </AuthStoreProvider>
    );
}


export default App;