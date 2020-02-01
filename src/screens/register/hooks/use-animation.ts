import { useSpring } from 'react-spring';

const useAnimation = () => {
    const { opacity: titleAnimation } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 0,
    });
    const { transform: usernameFieldAnimation } = useSpring({
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
    const { transform: confirmPWFieldAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 400
    });
    const { transform: registerButtonAnimation } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px, 600px, 0px)' },
        delay: 500
    });

    return {
        titleAnimation,
        pwFieldAnimation,
        emailFieldAnimation,
        usernameFieldAnimation,
        confirmPWFieldAnimation,
        registerButtonAnimation,
    };
}

export default useAnimation;