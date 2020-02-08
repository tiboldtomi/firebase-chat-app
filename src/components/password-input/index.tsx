import * as React from 'react';
import { animated } from 'react-spring';
import Input, { IInputProps } from '../styles/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeIconContainer, PasswordInputContainer } from './styles';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

interface IPasswordInput { }

const PasswordInput: React.FC<IPasswordInput & React.InputHTMLAttributes<HTMLInputElement> & IInputProps> = ({ style, ...rest }) => {

    const [showPW, setShowPW] = React.useState<boolean>(false);

    const inputRef = React.useRef<HTMLInputElement>();

    const updateShowPW = (show: boolean) => {
        inputRef.current?.focus();
        setShowPW(show);
    }

    return (
        <PasswordInputContainer style={{ ...style }}>
            <EyeIconContainer>
                {!showPW
                    ? <FontAwesomeIcon
                        icon={faEye}
                        onClick={e => updateShowPW(true)}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    : <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={e => updateShowPW(false)}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                }
            </EyeIconContainer>
            <Input ref={inputRef} type={showPW ? 'text' : 'password'} {...rest} />
        </PasswordInputContainer>
    );
}

export default animated(PasswordInput);