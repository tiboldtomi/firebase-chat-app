import * as React from 'react';
import { useHistory } from 'react-router-dom';

interface ILoginProps { }

const Login: React.FC<ILoginProps> = () => {

    const history = useHistory();

    return (
        <div>
            <div>{'Login screen'}</div>
            <button onClick={() => history.goBack()}>{'Back'}</button>
        </div>

    );
}

export default Login;