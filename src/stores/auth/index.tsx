import * as React from 'react';
import { User } from 'firebase';
import { useFirebase } from '../../utils';

export const AuthContext = React.createContext<{ currentUser: User | null }>({ currentUser: null });

export const AuthStoreProvider: React.FC<{}> = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState<User | null>(null);
    const { auth } = useFirebase();

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));
        return () => unsubscribe();
        // eslint-disable-next-line
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthStore = () => React.useContext(AuthContext);