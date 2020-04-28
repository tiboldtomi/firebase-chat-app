import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const _ProfileContainer = styled.div`
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

const _HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    width: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    height: ${theme.vw > theme.vh ? '100vw' : '100vh'};
    border-radius: 50%;
    padding-top: ${theme.vw > theme.vh ? 'calc(100vw * 0.75)' : 'calc(100vh * 0.4)'};
    box-shadow: inset -1px -1px 10px rgba(0,0,0,0.6), 5px 5px 25px rgba(0,0,0,0.6), -5px -5px 25px rgba(0,0,0,0.6);
    background-color: ${theme.primaryColor};
    background-image: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0));
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _HeaderNavContainer = styled.div`
    width: 100vw;
    padding: .75rem 1rem 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3.5rem;
`;

const _H1 = styled.h1`
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: ${theme.defaultFontColor};
    text-align: center;
`;

const _UserAvatar = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`;

const _UsernameText = styled.h2`
    margin: 8px 0;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${theme.defaultFontColor};
    text-align: center;
`;

export const H1 = animated(_H1);
export const ProfileContainer = animated(_ProfileContainer);
export const HeaderContainer = animated(_HeaderContainer);
export const HeaderNavContainer = animated(_HeaderNavContainer);
export const UsernameText = animated(_UsernameText);
export const UserAvatar = animated(_UserAvatar);
