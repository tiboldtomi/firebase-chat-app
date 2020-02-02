import styled from 'styled-components';
import { animated } from 'react-spring';
import { theme } from '../../utils/theme';

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
    height: 3rem;
    color: ${theme.fontColor};
    margin-bottom: .7rem;
    background-color: ${theme.defaultColor};
    border: 1px solid;
    border-color: ${({ isValid, isInvalid }) => isValid ? theme.successColor : isInvalid ? theme.dangerColor : 'transparent'};
    
    ::placeholder {
        text-transform: uppercase;
        color: ${theme.fontColor};
        letter-spacing: 1px;
    }
`;

export default animated(Input);