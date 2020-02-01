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
        delay: 100
    });
    const { transform: emailFieldAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 200
    });
    const { transform: pwFieldAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 300
    });
    const { transform: loginButtonAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 400
    });
    const { transform: socialMediaAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 500
    });

    return {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        emailFieldAnimation,
        loginButtonAnimation,
        socialMediaAnimation,
    };
}

export default useAnimation;