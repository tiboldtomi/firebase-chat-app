import { IAction } from '../../interfaces/action.interface';
import { NotificationActions } from './notification.actions';
import { INotification } from '../../interfaces/notification.interface';

export const notificationReducer = (state: INotification[], action: IAction<NotificationActions, INotification | undefined>): INotification[] => {
    switch (action.type) {
        case NotificationActions.ADD:
            if (action.payload) {
                return [
                    action.payload,
                    ...(state.length === 5 ? state.filter((_, i) => i !== 4) : state)
                ]
            }
            else return [...state];

        case NotificationActions.RESET:
            return [];

        case NotificationActions.DELETE:
            return [
                ...state.filter(noti => noti.id !== action.payload?.id)
            ];

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}