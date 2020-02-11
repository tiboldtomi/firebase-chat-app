import * as React from 'react';
import { useSpring } from 'react-spring';
import { useLoaderBannerStore } from '../../stores';
import { Banner, Loader, InnerLoader, ALoaderContainer, Text } from './styles';

interface ILoaderBannerProps {
    forceShow?: boolean;
}

const LoaderBanner: React.FC<ILoaderBannerProps> = ({ forceShow }) => {

    const { opacity } = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    const { loaderBanner } = useLoaderBannerStore();

    if (loaderBanner.isLoading || forceShow) {
        return (
            <Banner>
                <ALoaderContainer stlye={{ opacity }}>
                    <Loader />
                    <InnerLoader />
                </ALoaderContainer>
                <Text>{loaderBanner.text || 'Loading...'}</Text>
            </Banner>
        );
    }
    else return null;
};

export default LoaderBanner;