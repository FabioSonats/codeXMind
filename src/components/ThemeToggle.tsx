import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
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
        <SunIcon
          style={{
            width: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
            height: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
          }}
        />
      ) : (
        <MoonIcon
          style={{
            width: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
            height: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
          }}
        />
      )}
    </button>
  );
}
