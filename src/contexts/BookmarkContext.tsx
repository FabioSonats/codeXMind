import React, { createContext, useContext, useCallback } from 'react';
import { Bookmark, BookmarkContextType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

const BookmarkContext = createContext<BookmarkContextType | undefined>(
    undefined
);

interface BookmarkProviderProps {
    children: React.ReactNode;
}

export function BookmarkProvider({ children }: BookmarkProviderProps) {
    const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>(
        STORAGE_KEYS.BOOKMARKS,
        []
    );

    const addBookmark = useCallback(
        (item: Omit<Bookmark, 'id' | 'addedAt'>) => {
            const newBookmark: Bookmark = {
                ...item,
                id: `${item.type}-${item.url}`,
                addedAt: new Date().toISOString(),
            };

            setBookmarks(prev => {
                // Check if bookmark already exists
                const exists = prev.some(bookmark => bookmark.id === newBookmark.id);
                if (exists) return prev;

                return [...prev, newBookmark];
            });
        },
        [setBookmarks]
    );

    const removeBookmark = useCallback(
        (id: string) => {
            setBookmarks(prev => prev.filter(bookmark => bookmark.id !== id));
        },
        [setBookmarks]
    );

    const isBookmarked = useCallback(
        (id: string) => {
            return bookmarks.some(bookmark => bookmark.id === id);
        },
        [bookmarks]
    );

    const exportBookmarks = useCallback(() => {
        const dataStr = JSON.stringify(bookmarks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `codexmind-bookmarks-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }, [bookmarks]);

    const value: BookmarkContextType = {
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        exportBookmarks,
    };

    return (
        <BookmarkContext.Provider value={value}>
            {children}
        </BookmarkContext.Provider>
    );
}

// Hook para usar o contexto de bookmarks
export const useBookmark = (): BookmarkContextType => {
    const context = useContext(BookmarkContext);
    if (context === undefined) {
        throw new Error('useBookmark must be used within a BookmarkProvider');
    }
    return context;
};
