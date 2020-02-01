import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const WelcomeContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const WelcomeCircle = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    box-shadow: inset -1px -1px 10px rgba(0,0,0,0.6), 5px 5px 25px rgba(0,0,0,0.6), -5px -5px 25px rgba(0,0,0,0.6);
    background-color: ${theme.primaryColor};
    background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0));
`;

export const H1 = styled.h1`
    font-size: 2.3rem;
    color: ${theme.fontColor};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
`;

export const TitleContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const TitleIcon = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.fontColor}
`;

export const ControlsContainer = styled.div`
    width: 100%;
    height: 40vh;
    padding: 1vh 10vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const P = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.fontColor};
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