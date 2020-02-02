import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import { NotificationStoreProvider } from './stores';

ReactDOM.render(
    <NotificationStoreProvider>
        <App />
    </NotificationStoreProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
