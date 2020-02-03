import { theme } from '../../utils';
import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
`;

export const WelcomeCircle = styled.div`
    position: absolute;
    top: 0;
    width: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    height: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    padding-bottom: 8vh;
    border-radius: 50%;
    box-shadow: inset -1px -1px 10px rgba(0,0,0,0.6), 5px 5px 25px rgba(0,0,0,0.6), -5px -5px 25px rgba(0,0,0,0.6);
    background-color: ${theme.primaryColor};
    background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0));
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    color: ${theme.defaultFontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2.5vh;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const TitleIcon = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.defaultFontColor}
`;

export const ControlsContainer = styled.div`
    width: 100%;
    padding: 0 10vw 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const P = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.defaultFontColor};
    margin: 1.5rem 0;
    letter-spacing: 1px;
    text-align: center;
`;

export const SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;