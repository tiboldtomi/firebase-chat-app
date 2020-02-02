import { theme } from '../../utils';
import styled from 'styled-components';

const SocialMediaButton = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 3px solid ${theme.defaultFontColor};
    border-radius: 50%;
    background: transparent;
    color: ${theme.defaultFontColor};
    margin: 0 .75rem;
`;

export default SocialMediaButton;