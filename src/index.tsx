import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import { NotificationStoreProvider, LoaderBannerStoreProvider } from './stores';

ReactDOM.render(
    <LoaderBannerStoreProvider>
        <NotificationStoreProvider>
            <App />
        </NotificationStoreProvider>
    </LoaderBannerStoreProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
