import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const PasswordInputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const EyeIconContainer = styled.div`
    z-index: 10;
    position: absolute;
    height: calc(100% - .7rem);
    width: 3rem;
    top: 0;
    right: 0;
    color: ${theme.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;