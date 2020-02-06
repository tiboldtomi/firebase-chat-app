import * as React from 'react';
import { useSpring } from 'react-spring';
import { Banner, Loader, InnerLoader, ALoaderContainer, Text } from './styles';

interface ILoaderBannerProps { }

const LoaderBanner: React.FC<ILoaderBannerProps> = () => {

    const { opacity } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    return (
        <Banner>
            <ALoaderContainer stlye={{ opacity }}>
                <Loader />
                <InnerLoader />
            </ALoaderContainer>
            <Text>{'Loading...'}</Text>
        </Banner>
    );
};

export default LoaderBanner;