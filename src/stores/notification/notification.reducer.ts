import { IAction } from '../../interfaces/action.interface';
import { NotificationActions } from './notification.actions';
import { INotification } from '../../interfaces/notification.interface';

export const notificationReducer = (state: INotification, action: IAction<NotificationActions, INotification | undefined>): INotification => {
    switch (action.type) {
        case NotificationActions.ADD:
            if (state.message === null) {
                return {
                    ...state,
                    ...action.payload,
                };
            }
            else return state;

        case NotificationActions.RESET:
            return {
                type: null,
                message: null,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}