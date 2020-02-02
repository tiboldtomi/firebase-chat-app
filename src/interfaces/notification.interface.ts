import * as React from 'react';
import { IAction } from './action.interface';
import { NotificationActions } from '../stores/notification/notification.actions';

export enum NotificationType {
    Danger = 'Danger',
    Warning = 'Warning',
    Success = 'Success',
}

export interface INotification {
    type: NotificationType | null;
    message: string | null;
}

export interface INotificationContext {
    notification: INotification;
    dispatchNotification?: React.Dispatch<IAction<NotificationActions, INotification>>;
}