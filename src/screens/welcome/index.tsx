import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { Button, SocialMediaButton } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faFacebookF, faAngellist } from '@fortawesome/free-brands-svg-icons'
import { WelcomeContainer, WelcomeCircle, H1, ControlsContainer, P, SocialMediaContainer, TitleContainer, TitleIcon } from './styles';

interface IWelcomeProps { }

const Welcome: React.FC<IWelcomeProps> = () => {

    const { top } = useSpring({
        top: '5%',
        from: { top: '-50%' },
    });

    const { transform: defaultButtonTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 250,
    });

    const { transform: primaryButtonTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 400,
    });

    const { transform: socialMediaContainerTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 550,
    });

    const { transform: titleIconScale } = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 950,
    })

    const AP = animated(P);
    const AButton = animated(Button);
    const ATitleIcon = animated(TitleIcon);
    const AWelcomeCircle = animated(WelcomeCircle);
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
            <ControlsContainer>
                <AButton variant={'default'} style={{ transform: defaultButtonTransform }}>
                    {'Login'}
                </AButton>
                <AButton variant={'primary'} style={{ transform: primaryButtonTransform }}>
                    {'Create account'}
                </AButton>
                <AP style={{ transform: socialMediaContainerTransform }}>{'or login using social media'}</AP>
                <ASocialMediaContainer style={{ transform: socialMediaContainerTransform }}>
                    <SocialMediaButton onClick={() => console.log('facebook onclick')}>
                        <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                    </SocialMediaButton>
                    <SocialMediaButton onClick={() => console.log('google plus onclick')}>
                        <FontAwesomeIcon icon={faGooglePlusG} size={'2x'} />
                    </SocialMediaButton>
                </ASocialMediaContainer>
            </ControlsContainer>
        </WelcomeContainer>
    );
}

export default Welcome;