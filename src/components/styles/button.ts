import styled from 'styled-components';
import { animated } from 'react-spring';
import { theme } from '../../utils/theme';

interface IButtonProps {
    variant: ('default' | 'primary');
}

const Button = styled.button<IButtonProps>`
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${({ variant }) => variant === 'default' ? theme.defaultColor : theme.primaryColor};
    color: ${theme.fontColor};
    text-transform: uppercase;
    margin-bottom: .7rem;
    font-weight: 700;
    box-shadow: ${({ variant }) => variant === 'default' ? 'none' : '4px 4px 20px rgba(0,0,0,0.6)'}
`;

export default animated(Button);