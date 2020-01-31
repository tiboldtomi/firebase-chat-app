import styled from 'styled-components';
import { theme } from '../../utils/theme';

const SocialMediaButton = styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 3px solid ${theme.fontColor};
    border-radius: 50%;
    background: transparent;
    color: ${theme.fontColor};
    margin: 0 .75rem;
`;

export default SocialMediaButton;