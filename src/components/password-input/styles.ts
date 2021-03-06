import { theme } from '../../utils';
import styled from 'styled-components';

export const PasswordInputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const EyeIconContainer = styled.label`
    z-index: 10;
    position: absolute;
    height: calc(100% - .7rem);
    width: 3rem;
    top: 0;
    right: 0;
    color: ${theme.defaultFontColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;