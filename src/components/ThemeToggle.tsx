import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

/**
 * ThemeToggle Component
 * Toggle between light and dark themes
 */
export default function ThemeToggle({
    className = '',
    size = 'md',
}: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme();

    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
    };

    const buttonSizeClasses = {
        sm: 'p-1.5',
        md: 'p-2',
        lg: 'p-3',
    };

    return (
        <button
            onClick={toggleTheme}
            className={`${buttonSizeClasses[size]} text-gray-300 hover:text-white transition-colors duration-200 ${className}`}
            aria-label={`Switch to ${theme.mode === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme.mode === 'dark' ? (
                <Sun className={sizeClasses[size]} />
            ) : (
                <Moon className={sizeClasses[size]} />
            )}
        </button>
    );
}
