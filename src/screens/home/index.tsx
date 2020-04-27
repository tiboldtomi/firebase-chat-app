import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFirebase } from '../../utils';
import { HomeContainer, H1 } from './styles';
import { NotificationType } from '../../enums';
import { Button, Input } from '../../components';
import { useNotificationStore, NotificationActions, useAuthStore } from '../../stores';

interface IHomeProps { }

const Home: React.FC<IHomeProps> = () => {

    const { logout } = useFirebase();
    const { currentUser } = useAuthStore();
    const { dispatchNotification } = useNotificationStore();

    const _logout = () => {
        logout()
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

    const [username, setUsername] = React.useState<string>(currentUser?.displayName as string);

    if (currentUser?.displayName) {
        return (
            <HomeContainer>
                <H1>{`Welcome, ${currentUser?.displayName}!`}</H1>
                <Input
                    type={'text'}
                    value={username}
                    placeholder={'Change username'}
                    onChange={(e: any) => setUsername(e.target.value)}
                />
                <Button
                    variant={'primary'}
                    onClick={() => currentUser.updateProfile({ displayName: username })}
                >
                    {'Change username'}
                </Button>
                <Button
                    onClick={_logout}
                    variant={'default'}
                >
                    {'Logout'}
                </Button>
            </HomeContainer>
        );
    }
    else return <></>;
}

export default Home;