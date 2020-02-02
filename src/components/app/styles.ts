import { theme } from '../../utils';
import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.dark}
`;

export const Circle = styled.div`
    position: absolute;
    bottom: -350px;
    left: -20px;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background-color: ${theme.darker06};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerCircle = styled.div`
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: ${theme.dark};
`;