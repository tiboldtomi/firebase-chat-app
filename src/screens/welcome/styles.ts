import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const _WelcomeContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 600px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const _WelcomeCircle = styled.div`
    position: absolute;
    top: 0;
    width: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    height: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    padding-bottom: 5%;
    border-radius: 50%;
    box-shadow: inset -1px -1px 10px rgba(0,0,0,0.6), 5px 5px 25px rgba(0,0,0,0.6), -5px -5px 25px rgba(0,0,0,0.6);
    background-color: ${theme.primaryColor};
    background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0));
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 700px) {
        padding-bottom: 20%;
    }
`;

const _H1 = styled.h1`
    font-size: 3.5rem;
    color: ${theme.defaultFontColor};
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 2.5vh;

    @media (max-width: 700px) {
        font-size: 2.5rem;
    }
`;

const _TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const _TitleIcon = styled.div`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.defaultFontColor};

    @media (max-width: 700px) {
        height: 5rem;
    }
`;

const _ControlsContainer = styled.div`
    width: 100%;
    padding: 0 10vw 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _P = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.defaultFontColor};
    margin: 1.5rem 0;
    letter-spacing: 1px;
    text-align: center;
`;

const _SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const P = animated(_P);
export const H1 = animated(_H1);
export const TitleIcon = animated(_TitleIcon);
export const WelcomeCircle = animated(_WelcomeCircle);
export const TitleContainer = animated(_TitleContainer);
export const WelcomeContainer = animated(_WelcomeContainer);
export const ControlsContainer = animated(_ControlsContainer);
export const SocialMediaContainer = animated(_SocialMediaContainer);