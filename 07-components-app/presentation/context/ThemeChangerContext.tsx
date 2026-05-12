import { useThemeColor } from '@/hooks/use-theme-color';
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;
    bgColor: string;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType); // crea el contexto

// Custom Hook para acceder al contexto más comodamente sin muchas importaciones
export const useThemeChangerContext = () => {

    const themeChangerContext = useContext(ThemeChangerContext); // inicializa el contexto

    return themeChangerContext;
};

// Proveedor o Functional component que envuelve toda mi aplicación y permite acceder a la información
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {

    // Utilizamos el hook de React Native para acceder al tema del dispositivo
    const { colorScheme, setColorScheme } = useColorScheme();

    // Obtiene el color de background del tema respectivo
    const backgroundColor = useThemeColor({}, 'background');

    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currentTheme = isSystemThemeEnabled
        ? colorScheme : isDarkMode
            ? 'dark' : 'light';

    // Almacén persistente para el tema de la app, permitirá recuperarlo cuando cerremos y volvamos a abrir la aplicación
    const asyncStorage = createAsyncStorage("appDB");

    // Recuperación del tema que usará la aplicación si el usuario lo había elegido previamente
    useEffect(() => {
        const loadTheme = async () => {
            const theme = await asyncStorage.getItem('selected-theme');
            if (!theme) return; // el usuario no almacenó previamente el tema seleccionado

            setIsDarkMode(theme === 'dark');
            setIsSystemThemeEnabled(theme === 'system');
            setColorScheme(theme as 'light' | 'dark' | 'system');
        };

        loadTheme();
    }, []);


    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnabled,
                    bgColor: backgroundColor,
                    // Función que permite cambiar el tema entre claro y oscuro
                    toggleTheme: async () => {
                        const nextTheme = isDarkMode ? 'light' : 'dark';

                        setIsDarkMode(nextTheme === 'dark');
                        setColorScheme(nextTheme);
                        setIsSystemThemeEnabled(false);

                        // Guardamos en memoria persistente el tema de la app
                        await asyncStorage.setItem('selected-theme', nextTheme);
                    },
                    // permite utilizar el tema del SO del dispositivo
                    setSystemTheme: async () => {
                        setIsSystemThemeEnabled(true);
                        setColorScheme('system');

                        // Guardamos en memoria persistente que el tema que va a usar la app es el del SO del dispositivo
                        asyncStorage.setItem('selected-theme', 'system');
                    },
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>


    );

};