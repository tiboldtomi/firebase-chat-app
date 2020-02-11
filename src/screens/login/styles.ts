import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const _LoginContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 15vh 10vw 1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const _TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15vh;
`;

const _H1 = styled.h1`
    font-size: 1.6rem;
    color: ${theme.defaultFontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-weight: 600;
`;

const _TitleIcon = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.defaultFontColor};
`;

const _SubTitle = styled.h2`
    font-size: 1.6rem;
    color: ${theme.primaryFontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-weight: 600;
`;

const _ForgotPassword = styled.p`
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${theme.defaultFontColor};
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    text-align: center;
    align-self: flex-end;
`;

export const H1 = animated(_H1);
export const SubTitle = animated(_SubTitle);
export const TitleIcon = animated(_TitleIcon);
export const TitleContainer = animated(_TitleContainer);
export const LoginContainer = animated(_LoginContainer);
export const ForgotPassword = animated(_ForgotPassword);