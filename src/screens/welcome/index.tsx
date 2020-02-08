import { uuid } from 'uuidv4';
import * as React from 'react';
import { theme } from '../../utils';
import { useAnimation } from './hooks';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Button, SocialMediaButton } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNotificationStore, NotificationActions } from '../../stores';
import { NotificationType } from '../../interfaces/notification.interface';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { WelcomeContainer, WelcomeCircle, H1, ControlsContainer, P, SocialMediaContainer, TitleContainer, TitleIcon } from './styles';

interface IWelcomeProps { }

const Welcome: React.FC<IWelcomeProps> = () => {
    const history = useHistory();
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

    const AP = animated(P);
    const ATitleIcon = animated(TitleIcon);
    const AWelcomeCircle = animated(WelcomeCircle);
    const AControlsContainer = animated(ControlsContainer);
    const ASocialMediaContainer = animated(SocialMediaContainer);

    return (
        <WelcomeContainer>
            <AWelcomeCircle style={{ transform }}>
                <TitleContainer>
                    <H1>{'HOMiESCUP'}</H1>
                    <ATitleIcon style={{ transform: titleIconScale }}>
                        <FontAwesomeIcon icon={faTrophy} style={{ width: '100%', height: '100%' }} />
                    </ATitleIcon>
                </TitleContainer>
            </AWelcomeCircle>
            <AControlsContainer style={{ opacity }}>
                <Button variant={'default'} style={{ transform: defaultButtonTransform }} onClick={() => moveTo('/login')}>
                    {'Login'}
                </Button>
                <Button variant={'primary'} style={{ transform: primaryButtonTransform }} onClick={() => moveTo('/register')}>
                    {'Create account'}
                </Button>
                <AP style={{ transform: socialMediaContainerTransform }}>{'or login using social media'}</AP>
                <ASocialMediaContainer style={{ transform: socialMediaContainerTransform }}>
                    <SocialMediaButton onClick={() => loginWithSocialMedia('Facebook')}>
                        <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => loginWithSocialMedia('Google')}>
                        <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => loginWithSocialMedia('GitHub')}>
                        <FontAwesomeIcon icon={faGithub} size={'2x'} />
                    </SocialMediaButton>
                </ASocialMediaContainer>
            </AControlsContainer>
        </WelcomeContainer>
    );
}

export default Welcome;