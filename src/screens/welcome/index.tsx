import { uuid } from 'uuidv4';
import * as React from 'react';
import { useAnimation } from './hooks';
import { useSpring } from 'react-spring';
import { useHistory } from 'react-router-dom';
import { theme, useFirebase } from '../../utils';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Button, SocialMediaButton } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotificationType } from '../../interfaces/notification.interface';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNotificationStore, NotificationActions, useLoaderBannerStore, LoaderBannerActions } from '../../stores';
import { WelcomeContainer, WelcomeCircle, H1, ControlsContainer, P, SocialMediaContainer, TitleContainer, TitleIcon } from './styles';

interface IWelcomeProps { }

const Welcome: React.FC<IWelcomeProps> = () => {

    const history = useHistory();
    const { loginSocialMedia } = useFirebase();
    const { dispatchIsLoading } = useLoaderBannerStore();
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

    const _loginWithSocialMedia = (platform: ('Facebook' | 'GitHub' | 'Google')) => {
        dispatchIsLoading({ type: LoaderBannerActions.START, payload: { isLoading: true, text: `Logging in with ${platform}...` } });
        loginSocialMedia(platform)
            .then(() => {
                dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        id: uuid(),
                        timeStamp: Date.now(),
                        type: NotificationType.Success,
                        message: `You have been successfully logged in with ${platform}!`,
                    }
                });
            })
            .catch(({ message }) => {
                dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        message,
                        id: uuid(),
                        timeStamp: Date.now(),
                        type: NotificationType.Danger,
                    }
                });
            });
    }

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
                    <SocialMediaButton onClick={() => _loginWithSocialMedia('Facebook')}>
                        <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => _loginWithSocialMedia('Google')}>
                        <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => _loginWithSocialMedia('GitHub')}>
                        <FontAwesomeIcon icon={faGithub} size={'2x'} />
                    </SocialMediaButton>
                </SocialMediaContainer>
            </ControlsContainer>
        </WelcomeContainer>
    );
}

export default Welcome;