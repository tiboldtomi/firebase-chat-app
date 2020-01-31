import styled from 'styled-components';
import { theme } from '../../utils/theme';

interface IButtonProps {
    variant: ('default' | 'primary');
}

const Button = styled.button<IButtonProps>`
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${({ variant }) => variant === 'default' ? 'rgba(255,255,255,0.15)' : theme.primaryColor};
    color: ${theme.fontColor};
    text-transform: uppercase;
    margin-bottom: .7rem;
    font-weight: 700;
`;

export default Button;