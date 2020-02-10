import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const _HomeContainer = styled.div`
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

export const H1 = animated(_H1);
export const SubTitle = animated(_SubTitle);
export const TitleIcon = animated(_TitleIcon);
export const HomeContainer = animated(_HomeContainer);
export const TitleContainer = animated(_TitleContainer);