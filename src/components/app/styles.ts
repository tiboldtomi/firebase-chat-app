import { theme } from '../../utils';
import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.dark};
    background-image: linear-gradient(135deg, rgba(48,48,48,1) 0%, rgba(255,255,255,.05) 100%);
`;

export const Circle = styled.div`
    position: absolute;
    bottom: ${theme.vw > theme.vh ? '-50vw' : '-50vh'};
    width: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    height: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    border-radius: 50%;
    background-color: ${theme.darker06};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerCircle = styled.div`
    width: ${theme.vw > theme.vh ? '70vw' : '70vh'};
    height: ${theme.vw > theme.vh ? '70vw' : '70vh'};
    border-radius: 50%;
    background-color: ${theme.dark};
`;