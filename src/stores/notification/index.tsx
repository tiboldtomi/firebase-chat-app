import * as React from 'react';
import { notificationReducer } from './notification.reducer';
import { INotification, INotificationContext } from '../../interfaces';

const initialState: INotification[] = [];

const NotificationStoreContext = React.createContext<INotificationContext>({ notifications: initialState, dispatchNotification: () => { } });

export const NotificationStoreProvider: React.FC<{}> = ({ children }) => {
    const [notifications, dispatchNotification] = React.useReducer(notificationReducer, initialState);

    return (
        <NotificationStoreContext.Provider value={{ notifications, dispatchNotification }}>
            {children}
        </NotificationStoreContext.Provider>
    );
}

export const useNotificationStore = () => React.useContext(NotificationStoreContext);

export * from './notification.actions';