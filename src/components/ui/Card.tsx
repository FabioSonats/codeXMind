import React from 'react';
import { CardProps } from '../../types';
import { cn } from '../../utils/cn';

/**
 * Card Component
 * Reusable card container with hover effects and padding options
 */
export default function Card({
    children,
    className = '',
    hover = false,
    padding = 'md',
    ...props
}: CardProps) {
    const baseClasses =
        'bg-slate-800/50 border border-slate-700 rounded-2xl transition-colors duration-200';

    const hoverClasses = hover
        ? 'hover:border-cyan-500 hover:shadow-soft-lg'
        : '';

    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                baseClasses,
                hoverClasses,
                paddingClasses[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
