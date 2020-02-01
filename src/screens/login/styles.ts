import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const LoginContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 15vh 10vw 1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const H1 = styled.h1`
    font-size: 1.6rem;
    color: ${theme.fontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-weight: 600;
    margin-bottom: 25vh;
`;

export const SubTitle = styled.h2`
    font-size: 1.6rem;
    color: ${theme.primaryFontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-weight: 600;
`;