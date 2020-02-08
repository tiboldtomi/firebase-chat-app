import { useSpring } from 'react-spring';

const useAnimation = () => {
    const { opacity: titleAnimation } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 0,
    });
    const { transform: subTitleAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 50
    });
    const { transform: emailFieldAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 100
    });
    const { transform: pwFieldAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 150
    });
    const { transform: loginButtonAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 200
    });
    const { transform: socialMediaAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 250
    });
    const { transform: titleIconAnimation } = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 300,
    });

    return {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        titleIconAnimation,
        emailFieldAnimation,
        loginButtonAnimation,
        socialMediaAnimation,
    };
}

export default useAnimation;