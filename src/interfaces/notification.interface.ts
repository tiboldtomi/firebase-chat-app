import * as React from 'react';
import { NotificationType } from '../enums';
import { default as IAction } from './action.interface';
import { NotificationActions } from '../stores/notification/notification.actions';

export interface INotification {
    id: string;
    message: string;
    timeStamp: number;
    type: NotificationType;
}

export interface INotificationContext {
    notifications: INotification[];
    dispatchNotification: React.Dispatch<IAction<NotificationActions, INotification | undefined>>;
}