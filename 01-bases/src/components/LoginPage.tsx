import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const { user,
        isChecking,
        isAuthenticated,
        loginWithEmailPassword,
        logout } = useAuthContext();

    if (isChecking) {
        return <h1>Verificando usuario...</h1>;
    }

    return (
        <>
            {isAuthenticated ? (
                <>
                    <h3>Bienvenido</h3>
                    <pre>{JSON.stringify(user, null, 2)}</pre>

                    <button
                        className='bg-blue-500 p-2 text-white rounded-xl mt-2'
                        onClick={() => logout()}
                    >
                        Salir
                    </button>
                </>
            ) : (
                <>
                    <h3>Ingresar a la aplicación</h3>
                    <button
                        className='bg-blue-500 p-2 text-white rounded-xl mt-2'
                        onClick={() => loginWithEmailPassword('andrespodadera87@gmail.com', 'supersecret')}
                    >
                        Ingresar
                    </button>
                </>
            )}
        </>
    );
};