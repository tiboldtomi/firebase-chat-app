import * as React from 'react';
import { notificationReducer } from './notification.reducer';
import { INotification, INotificationContext } from '../../interfaces/notification.interface';

const initialState: INotification = {
    type: null,
    message: null,
};

const NotificationStoreContext = React.createContext<INotificationContext>({ notification: initialState });

export const NotificationStoreProvider: React.FC<{}> = ({ children }) => {
    const [notification, dispatchNotification] = React.useReducer(notificationReducer, initialState);

    return (
        <NotificationStoreContext.Provider value={{ notification, dispatchNotification }}>
            {children}
        </NotificationStoreContext.Provider>
    );
}

export const useNotificationStore = () => React.useContext(NotificationStoreContext);