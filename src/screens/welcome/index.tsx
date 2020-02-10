import { uuid } from 'uuidv4';
import * as React from 'react';
import { theme } from '../../utils';
import { useAnimation } from './hooks';
import { useSpring } from 'react-spring';
import { useHistory, Redirect } from 'react-router-dom';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Button, SocialMediaButton } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotificationType } from '../../interfaces/notification.interface';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNotificationStore, NotificationActions, useAuthStore } from '../../stores';
import { WelcomeContainer, WelcomeCircle, H1, ControlsContainer, P, SocialMediaContainer, TitleContainer, TitleIcon } from './styles';

interface IWelcomeProps { }

const Welcome: React.FC<IWelcomeProps> = () => {
    const history = useHistory();
    const { currentUser } = useAuthStore();
    const { dispatchNotification } = useNotificationStore();

    const { vh, vw } = theme;

    const {
        titleIconScale,
        defaultButtonTransform,
        primaryButtonTransform,
        socialMediaContainerTransform,
    } = useAnimation();

    const [{ transform, opacity }, set] = useSpring(() => ({ transform: `translate3d(0,${vw > vh ? '-150vw' : '-150vh'},0)`, opacity: 1 }));
    set({ transform: `translate3d(0,${vw > vh ? '-75vw' : '-50vh'},0)` });

    const moveTo = (path: string) => {
        set({ transform: `translate3d(0,${vw > vh ? '-120vw' : '-120vh'},0)`, opacity: 0 });
        setTimeout(() => history.push(path), 400);
    };

    const loginWithSocialMedia = (platform: ('Facebook' | 'GitHub' | 'Google')) => {
        dispatchNotification({
            type: NotificationActions.ADD,
            payload: {
                id: uuid(),
                timeStamp: Date.now(),
                type: NotificationType.Warning,
                message: `Login with ${platform} is under development.`,
            }
        });
    }

    if (!currentUser) {
        return (
            <WelcomeContainer>
                <WelcomeCircle style={{ transform }}>
                    <TitleContainer>
                        <H1>{'HOMiESCUP'}</H1>
                        <TitleIcon style={{ transform: titleIconScale }}>
                            <FontAwesomeIcon icon={faTrophy} style={{ width: '100%', height: '100%' }} />
                        </TitleIcon>
                    </TitleContainer>
                </WelcomeCircle>
                <ControlsContainer style={{ opacity }}>
                    <Button variant={'default'} style={{ transform: defaultButtonTransform }} onClick={() => moveTo('/login')}>
                        {'Login'}
                    </Button>
                    <Button variant={'primary'} style={{ transform: primaryButtonTransform }} onClick={() => moveTo('/register')}>
                        {'Create account'}
                    </Button>
                    <P style={{ transform: socialMediaContainerTransform }}>{'or login using social media'}</P>
                    <SocialMediaContainer style={{ transform: socialMediaContainerTransform }}>
                        <SocialMediaButton onClick={() => loginWithSocialMedia('Facebook')}>
                            <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                        </SocialMediaButton>
                        <SocialMediaButton onClick={() => loginWithSocialMedia('Google')}>
                            <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                        </SocialMediaButton>
                        <SocialMediaButton onClick={() => loginWithSocialMedia('GitHub')}>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} />
                        </SocialMediaButton>
                    </SocialMediaContainer>
                </ControlsContainer>
            </WelcomeContainer>
        );
    }
    else {
        return <Redirect to={'/home'} />
    }
}

export default Welcome;