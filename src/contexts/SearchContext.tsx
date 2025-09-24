import React, { createContext, useContext } from 'react';
import { SearchContextType } from '../types';
import { useSearch } from '../hooks/useSearch';

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
    children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
    const searchHook = useSearch();

    const value: SearchContextType = {
        searchQuery: searchHook.query,
        setSearchQuery: searchHook.setQuery,
        searchResults: searchHook.results,
        isSearching: searchHook.loading,
        clearSearch: searchHook.clearResults,
    };

    return (
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    );
}

// Hook para usar o contexto de busca
export const useSearchContext = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
};
