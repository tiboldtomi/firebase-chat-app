import * as React from 'react';
import { animated } from 'react-spring';
import Input, { IInputProps } from '../styles/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeIconContainer, PasswordInputContainer } from './styles';
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

export default animated(PasswordInput);