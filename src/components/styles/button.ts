import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

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
    height: ${theme.baseHeight};
    background-color: ${({ variant }) => variant === 'default' ? theme.defaultColor : theme.primaryColor};
    color: ${theme.defaultFontColor};
    text-transform: uppercase;
    margin-bottom: 1.2vh;
    font-weight: 700;
    box-shadow: ${({ variant }) => variant === 'default' ? 'none' : '4px 4px 20px rgba(0,0,0,0.6)'}
`;

export default animated(Button);