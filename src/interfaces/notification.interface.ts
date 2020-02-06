import * as React from 'react';
import { IAction } from './action.interface';
import { NotificationActions } from '../stores/notification/notification.actions';

export enum NotificationType {
    Danger = 'Danger',
    Warning = 'Warning',
    Success = 'Success',
}

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