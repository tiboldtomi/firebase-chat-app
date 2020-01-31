import * as React from 'react';
import { useHistory } from 'react-router-dom';

interface IRegisterProps { }

const Register: React.FC<IRegisterProps> = () => {

    const history = useHistory();

    return (
        <div>
            <div>{'Register screen'}</div>
            <button onClick={() => history.goBack()}>{'Back'}</button>
        </div>
    );
}

export default Register;