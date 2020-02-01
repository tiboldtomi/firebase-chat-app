import { useSpring } from 'react-spring';

const useAnimation = () => {
    const { transform: defaultButtonTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 200,
    });

    const { transform: primaryButtonTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 300,
    });

    const { transform: socialMediaContainerTransform } = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        from: { transform: 'translate3d(0px,600px, 0px)' },
        delay: 400,
    });

    const { transform: titleIconScale } = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0)' },
        delay: 700,
    });

    return {
        titleIconScale,
        defaultButtonTransform,
        primaryButtonTransform,
        socialMediaContainerTransform,
    };
}

export default useAnimation;