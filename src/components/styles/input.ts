import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

export interface IInputProps {
    isValid?: boolean;
    isInvalid?: boolean;
}

const Input = styled.input<IInputProps>`
    all: unset;
    position: relative;
    box-sizing: border-box;
    padding: .5rem;
    padding-left: 1rem;
    padding-right: ${({ type }) => type === 'password' ? '3rem' : '1rem'};
    width: 100%;
    height: ${theme.baseHeight};
    color: ${theme.defaultFontColor};
    margin-bottom: .7rem;
    background-color: ${theme.defaultColor};
    border: 1px solid;
    border-color: ${({ isValid, isInvalid }) => isValid ? theme.successColor : isInvalid ? theme.dangerColor : 'transparent'};
    
    ::placeholder {
        text-transform: uppercase;
        color: ${theme.defaultFontColor};
        letter-spacing: 1px;
    }
`;

export default animated(Input);