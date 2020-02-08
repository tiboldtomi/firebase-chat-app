import { IAction } from '../../interfaces/action.interface';
import { NotificationActions } from './notification.actions';
import { INotification } from '../../interfaces/notification.interface';

const MAX_NOTIFICATION_COUNT: number = 4;

export const notificationReducer = (state: INotification[], action: IAction<NotificationActions, INotification | undefined>): INotification[] => {
    switch (action.type) {
        case NotificationActions.ADD:
            if (action.payload) {
                return [
                    action.payload,
                    ...(state.length === MAX_NOTIFICATION_COUNT
                        ? state.filter((_, i) => i !== MAX_NOTIFICATION_COUNT - 1)
                        : state
                    )
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