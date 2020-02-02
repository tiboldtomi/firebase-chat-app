import * as React from 'react';
import { useAnimation } from './hooks';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Button, SocialMediaButton } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons'
import { WelcomeContainer, WelcomeCircle, H1, ControlsContainer, P, SocialMediaContainer, TitleContainer, TitleIcon } from './styles';

interface IWelcomeProps { }

const Welcome: React.FC<IWelcomeProps> = () => {
    const history = useHistory();

    const {
        titleIconScale,
        defaultButtonTransform,
        primaryButtonTransform,
        socialMediaContainerTransform,
    } = useAnimation();

    const [{ top, opacity }, set] = useSpring(() => ({ top: '-65%', opacity: 1 }));
    set({ top: '5%' });

    const moveTo = (path: string) => {
        set({ top: '-65%', opacity: 0 });
        setTimeout(() => history.push(path), 400);
    };

    const AP = animated(P);
    const ATitleIcon = animated(TitleIcon);
    const AWelcomeCircle = animated(WelcomeCircle);
    const AControlsContainer = animated(ControlsContainer);
    const ASocialMediaContainer = animated(SocialMediaContainer);

    return (
        <WelcomeContainer>
            <AWelcomeCircle style={{ top }}>
                <TitleContainer>
                    <H1>{'Welcome'}</H1>
                    <ATitleIcon style={{ transform: titleIconScale }}>
                        <FontAwesomeIcon icon={faAngellist} style={{ width: '100%', height: '100%' }} />
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
                    <SocialMediaButton onClick={() => console.log('facebook onclick')}>
                        <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => console.log('google plus onclick')}>
                        <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => console.log('github login onclick')}>
                        <FontAwesomeIcon icon={faGithub} size={'2x'} />
                    </SocialMediaButton>
                </ASocialMediaContainer>
            </AControlsContainer>
        </WelcomeContainer>
    );
}

export default Welcome;