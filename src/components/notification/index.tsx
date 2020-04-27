import * as React from 'react';
import { useDrag } from 'react-use-gesture';
import { NotificationType } from '../../enums';
import { usePrevious, theme } from '../../utils';
import { useNotificationStore } from '../../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, useTransition, useSpring, interpolate } from 'react-spring';
import { NotificationActions } from '../../stores/notification/notification.actions';
import { faCheck, faInfo, faExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ANotificationContainer, NotificationText, AIconContainer, DeleteIconContainer } from './styles';

const NOTIFICATIONS_MAX_COUNT: number = 4;

interface INotificationProps { }

const Notification: React.FC<INotificationProps> = () => {

    const { vw } = theme;
    const [dragId, setDragId] = React.useState<string | null>(null);
    const { notifications, dispatchNotification } = useNotificationStore();

    const notificationAnimations = useTransition(
        (notifications.map((n, index) => (index < NOTIFICATIONS_MAX_COUNT) ? ({ ...n, y: index * 4 }) : null).filter(n => !!n) as any[]),
        n => n.id,
        {
            from: { opacity: 0, top: -4 },
            leave: { opacity: 0 },
            enter: ({ y }) => ({ opacity: 1, top: y }),
            update: ({ y }) => ({ opacity: 1, top: y }),
            config: { ...config.default, friction: 16 }
        }
    );

    const prevNotifications = usePrevious(notifications);

    React.useEffect(() => {
        if ((prevNotifications as any[])?.length < notifications?.length) {
            const newNotification = notifications.find(noti => prevNotifications?.map(prevNoti => prevNoti.id).indexOf(noti.id) === -1);
            setTimeout(() => dispatchNotification({ type: NotificationActions.DELETE, payload: newNotification }), 3500);
        }
        // eslint-disable-next-line
    }, [notifications]);

    const notificationCenter = vw * 0.94 * -0.5;
    const [{ left }, setManualDrag] = useSpring(() => ({ left: notificationCenter }));
    const bind = useDrag(({ down, movement: [mx], args: [id] }) => {
        const swipeLimit = vw * 0.65;
        setManualDrag({
            left: mx > swipeLimit
                ? vw
                : mx < -swipeLimit
                    ? -vw * 2
                    : down
                        ? notificationCenter + mx
                        : notificationCenter,
            immediate: down,
        });
        if (down) {
            setDragId(id);
            if (mx > swipeLimit || mx < -swipeLimit) {
                dispatchNotification({
                    type: NotificationActions.DELETE,
                    payload: notifications.find(({ id: _id }) => _id === id),
                })
            }
        }
        else {
            setTimeout(() => setDragId(null), 500);
        }
    });

    return (
        <>
            {notificationAnimations.map(({ item: notification, props }) => {
                const { opacity, top } = props;
                return (
                    <ANotificationContainer
                        {...bind(notification.id)}
                        key={notification.id}
                        type={notification.type}
                        style={{
                            opacity,
                            transform: dragId === notification.id
                                ? interpolate([top as any, left as any], (y, x) => `translate(${x}px, ${y}rem)`)
                                : top?.interpolate(y => `translate(-50%, ${y}rem)`),
                        }}
                    >
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