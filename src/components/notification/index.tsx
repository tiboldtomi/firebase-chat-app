import * as React from 'react';
import { useNotificationStore } from '../../stores';
import { config, useTransition } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationType } from '../../interfaces/notification.interface';
import { NotificationActions } from '../../stores/notification/notification.actions';
import { faCheck, faInfo, faExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ANotificationContainer, NotificationText, AIconContainer, DeleteIconContainer } from './styles';

interface INotificationProps { }

const Notification: React.FC<INotificationProps> = () => {

    const { notifications, dispatchNotification } = useNotificationStore();

    const notificationAnimations = useTransition(
        notifications.map((n, index) => ({ ...n, y: index * 4 })),
        n => n.id,
        {
            from: { opacity: 0, transform: `translate(-50%, -4rem)` },
            leave: { opacity: 0 },
            enter: ({ y }) => ({ opacity: 1, transform: `translate(-50%, ${y}rem)` }),
            update: ({ y }) => ({ opacity: 1, transform: `translate(-50%, ${y}rem)` }),
            config: { ...config.default, friction: 16 }
        }
    );


    React.useEffect(() => {
        setTimeout(() => dispatchNotification({ type: NotificationActions.DELETE, payload: notifications[0] }), 4000);
        // eslint-disable-next-line
    }, [notifications]);

    return (
        <>
            {notificationAnimations.map(({ item: notification, props }) => {
                const { opacity, transform } = props;
                return (
                    <ANotificationContainer key={notification.id} type={notification.type} style={{ transform, opacity }}>
                        <AIconContainer type={notification.type}>
                            <FontAwesomeIcon
                                icon={
                                    notification.type === NotificationType.Danger
                                        ? faExclamation
                                        : notification.type === NotificationType.Warning
                                            ? faInfo
                                            : faCheck
                                }
                            />
                        </AIconContainer>
                        <NotificationText strLenght={notification.message?.length}>{notification.message}</NotificationText>
                        <DeleteIconContainer>
                            <FontAwesomeIcon
                                size={'lg'}
                                icon={faTimes}
                                onClick={() => dispatchNotification({
                                    type: NotificationActions.DELETE,
                                    payload: notification
                                })}
                            />
                        </DeleteIconContainer>
                    </ANotificationContainer>
                );
            })}
        </>
    );
}

export default Notification;