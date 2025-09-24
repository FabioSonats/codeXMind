/**
 * Utility functions for localStorage operations
 */

/**
 * Safely get item from localStorage
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;

    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        return defaultValue;
    }
}

/**
 * Safely set item in localStorage
 */
export function setStorageItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
    }
}

/**
 * Safely remove item from localStorage
 */
export function removeStorageItem(key: string): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
    }
}

/**
 * Clear all localStorage
 */
export function clearStorage(): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
}

// Storage keys constants
export const STORAGE_KEYS = {
    THEME: 'codexmind-theme',
    BOOKMARKS: 'codexmind-bookmarks',
    SEARCH_HISTORY: 'codexmind-search-history',
    USER_PREFERENCES: 'codexmind-user-preferences',
} as const;
