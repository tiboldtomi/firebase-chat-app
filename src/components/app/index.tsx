import * as React from 'react';
import { AuthenticatedRoute } from '../';
import { Login, Home, Register, Welcome } from '../../screens';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContainer, Circle, InnerCircle } from './styles';

interface IAppProps { }

const App: React.FC<IAppProps> = () => {

    return (

        <AppContainer>
            <Circle>
                <InnerCircle />
            </Circle>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path={'/login'} component={Login} />
                    <Route exact={true} path={'/welcome'} component={Welcome} />
                    <Route exact={true} path={'/register'} component={Register} />
                    <AuthenticatedRoute exact={true} path={'/'} screen={<Home />} userLoggedIn={false} />
                </Switch>
            </BrowserRouter>

        </AppContainer>
    );
}


export default App;