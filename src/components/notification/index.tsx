import * as React from 'react';
import { useSpring, config } from 'react-spring';
import { useNotificationStore } from '../../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationType } from '../../interfaces/notification.interface';
import { faCheck, faInfo, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { ANotificationContainer, NotificationText, AIconContainer } from './styles';
import { NotificationActions } from '../../stores/notification/notification.actions';

interface INotificationProps { }

const Notification: React.FC<INotificationProps> = () => {

    const { notification, dispatchNotification } = useNotificationStore();

    const [{ transform, opacity }, set] = useSpring(() => ({
        transform: 'translate(-50%, -150px)',
        opacity: 0,
        config: { ...config.default, friction: 16 }
    }));

    React.useEffect(() => {
        if (notification.message !== null) {
            set({ opacity: 1, transform: 'translate(-50%, 0px)' });
            setTimeout(() => set({ opacity: 0, transform: 'translate(-50%, -150px)' }), 3200);
            setTimeout(() => dispatchNotification({ type: NotificationActions.RESET, payload: undefined }), 4000);
        }
        // eslint-disable-next-line
    }, [notification]);


    if (!!notification.message) {
        return (
            <ANotificationContainer type={notification.type} style={{ transform, opacity }}>
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
                <NotificationText strLenght={notification.message.length}>{notification.message}</NotificationText>
            </ANotificationContainer>
        );
    }
    return <></>;
}

export default Notification;