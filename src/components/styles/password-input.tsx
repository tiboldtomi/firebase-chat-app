import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Input, { IInputProps } from './input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

interface IPasswordInput { }

const PasswordInput: React.FC<IPasswordInput & React.InputHTMLAttributes<HTMLInputElement> & IInputProps> = ({ style, ...rest }) => {

    const [showPW, setShowPW] = React.useState<boolean>(false);

    return (
        <PasswordInputContainer style={{ ...style }}>
            <EyeIconContainer>
                {!showPW
                    ? <FontAwesomeIcon icon={faEye} style={{ width: '1.5rem', height: '1.5rem' }} onClick={() => setShowPW(true)} />
                    : <FontAwesomeIcon icon={faEyeSlash} style={{ width: '1.5rem', height: '1.5rem' }} onClick={() => setShowPW(false)} />
                }
            </EyeIconContainer>
            <Input type={showPW ? 'text' : 'password'} {...rest} />
        </PasswordInputContainer>
    );
}

const PasswordInputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const EyeIconContainer = styled.div`
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

export default PasswordInput;