import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated'
};

interface AuthState {
    status: AuthStatus;
    isChecking: boolean;
    isAuthenticated: boolean;
    token?: string;
    user?: User;

    loginWithEmailPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

const AuthContext = createContext({} as AuthState);

// Custom hook para exporner todo el contexto
export const useAuthContext = () => useContext(AuthContext);

// Proveedor de contexto, un HOC o componente de orden superior que actua como envoltorio para sus hijos
export const AuthProvider = ({ children }: PropsWithChildren) => {

    // Estados del componente
    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    // Efectos
    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated);
        }, 1500);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loginWithEmailPassword = (email: string, _password: string) => {
        setUser({
            name: 'Andrés Podadera',
            email: email
        });
        setStatus(AuthStatus.authenticated);
    };

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.unauthenticated);
    };

    return (
        <AuthContext.Provider
            value={{
                // Properties
                status: status,
                user: user,

                // Getters o propiedades computadas, basadas en otras propiedades
                isChecking: status === AuthStatus.checking,
                isAuthenticated: status === AuthStatus.authenticated,

                // Methods
                loginWithEmailPassword,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};