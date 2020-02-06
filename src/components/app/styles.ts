import { theme } from '../../utils';
import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.dark};
    background-image: linear-gradient(135deg, rgba(48,48,48,1) 0%, rgba(255,255,255,.05) 100%);
`;

export const BottomCircle = styled.div`
    position: absolute;
    left: 0;
    bottom: -50vh;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    background-color: ${theme.darker06};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 700px) {
        width: 900px;
        height: 900px;
        bottom: -450px;
    }
`;

export const TopCircle = styled.div`
    position: absolute;
    right: 0;
    top: -50vh;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    background-color: ${theme.darker06};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 700px) {
        width: 900px;
        height: 900px;
        bottom: -450px;
    }
`;

export const InnerCircle = styled.div`
    width: 70vh;
    height: 70vh;
    border-radius: 50%;
    background-color: ${theme.dark};

    @media (min-width: 700px) {
        width: 600px;
        height: 600px;
    }
`;