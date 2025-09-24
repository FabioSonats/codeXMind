import React, { createContext, useContext, useEffect } from 'react';
import { Theme, ThemeContextType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useLocalStorage<Theme>(STORAGE_KEYS.THEME, {
        mode: 'dark',
        primary: 'navy',
        accent: 'cyan',
    });

    const toggleTheme = () => {
        setTheme(prev => ({
            ...prev,
            mode: prev.mode === 'light' ? 'dark' : 'light',
        }));
    };

    // Apply theme to document
    useEffect(() => {
        const root = document.documentElement;

        if (theme.mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme.mode]);

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

// Hook para usar o contexto de tema
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
