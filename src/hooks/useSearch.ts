import { useState, useEffect, useCallback } from 'react';
import { SearchResult, UseSearchReturn } from '../types';
import { SearchRepository } from '../services/SearchRepository';
import { useDebounce } from './useDebounce';

/**
 * Custom hook for search functionality
 * Handles search state, debouncing, and API calls
 */
export function useSearch(): UseSearchReturn {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { debouncedValue: debouncedQuery } = useDebounce(query, 300);

    const performSearch = useCallback(async (searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const searchRepository = new SearchRepository();
            const searchResults = await searchRepository.globalSearch(searchQuery);
            setResults(searchResults);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao buscar');
            setResults([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        performSearch(debouncedQuery);
    }, [debouncedQuery, performSearch]);

    const clearResults = useCallback(() => {
        setResults([]);
        setQuery('');
        setError(null);
    }, []);

    return {
        query,
        setQuery,
        results,
        loading,
        error,
        clearResults,
    };
}
