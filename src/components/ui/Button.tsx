import React from 'react';
import { ButtonProps } from '../../types';
import { cn } from '../../utils/cn';

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 */
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    className = '',
    ...props
}: ButtonProps) {
    const baseClasses =
        'inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-soft',
        secondary:
            'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600',
        outline:
            'bg-transparent border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white',
        ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-slate-700',
    };

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {loading && (
                <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2' />
            )}
            {children}
        </button>
    );
}
