import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFirebase } from '../../utils';
import { Button } from '../../components';
import { HomeContainer, H1 } from './styles';
import { useNotificationStore, NotificationActions } from '../../stores';
import { NotificationType } from '../../interfaces/notification.interface';

interface IHomeProps { }

const Home: React.FC<IHomeProps> = () => {

    const { dispatchNotification } = useNotificationStore();

    const logout = () => {
        useFirebase.auth().signOut()
            .then(() => {
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        id: uuid(),
                        timeStamp: Date.now(),
                        type: NotificationType.Success,
                        message: 'You have been successfully logged out!'
                    }
                });
            });
    }

    return (
        <HomeContainer>
            <H1>{'Welcome!'}</H1>
            <Button
                variant={'default'}
                onClick={() => logout()}
            >
                {'Sign out'}
            </Button>
        </HomeContainer>
    );
}

export default Home;