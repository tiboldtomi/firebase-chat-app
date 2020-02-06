import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';
import { theme } from '../../utils';

const Banner = styled.div`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;

const LoaderContainer = styled.div`
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    margin: .5rem;
`;

const Text = styled.p`
    width: 1.8rem;
    height: 1.8rem;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: rgba(255,255,255,.3);
    margin-bottom: .25rem;
`;

const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg) translate(-50%, -50%);
    }
    to {
        transform: rotate(360deg) translate(-50%, -50%);
    }
`;

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 5px;
    transform-origin: top left;
    background: rgba(255,255,255,.3);
    animation: ${loaderAnimation} 1s ease infinite;
`;

const innerLoaderAnimation = keyframes`
    0% {
        transform: rotate(0deg) translate(-50%, -50%);
    }
    100% {
        transform: rotate(-360deg) translate(-50%, -50%);
    }
`;

const InnerLoader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5px;
    transform-origin: top left;
    background: ${theme.primaryColor};
    animation: ${innerLoaderAnimation} 1s ease infinite;
`;

const ABanner = animated(Banner);
const ALoader = animated(Loader);
const AInnerLoader = animated(InnerLoader);
const ALoaderContainer = animated(LoaderContainer);

export {
    Text,
    Banner,
    ABanner,
    Loader,
    ALoader,
    InnerLoader,
    AInnerLoader,
    LoaderContainer,
    ALoaderContainer,
};