import { useState, useEffect, useCallback } from 'react';
import {
    LibraryItem,
    SearchFilters,
    UseLibraryReturn,
    PaginationInfo,
} from '../types';
import { LibraryRepository } from '../services/LibraryRepository';

/**
 * Custom hook for library functionality
 * Handles library items state, pagination, and API calls
 */
export function useLibrary(
    initialFilters: SearchFilters = {}
): UseLibraryReturn {
    const [items, setItems] = useState<LibraryItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<SearchFilters>(initialFilters);
    const [pagination, setPagination] = useState<PaginationInfo | null>(null);

    const fetchItems = useCallback(
        async (
            page: number = 1,
            limit: number = 12,
            currentFilters: SearchFilters = filters
        ) => {
            setLoading(true);
            setError(null);

            try {
                const libraryRepository = new LibraryRepository();
                const response = await libraryRepository.getLibraryItems(
                    page,
                    limit,
                    currentFilters
                );
                setItems(response.data);
                setPagination(response.pagination || null);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Erro ao carregar itens da biblioteca'
                );
                setItems([]);
                setPagination(null);
            } finally {
                setLoading(false);
            }
        },
        [filters]
    );

    const updateFilters = useCallback(
        (newFilters: SearchFilters) => {
            setFilters(newFilters);
            fetchItems(1, 12, newFilters);
        },
        [fetchItems]
    );

    const loadMore = useCallback(() => {
        if (pagination?.hasNext && !loading) {
            fetchItems(pagination.page + 1, 12, filters);
        }
    }, [pagination, loading, fetchItems, filters]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return {
        items,
        loading,
        error,
        filters,
        setFilters: updateFilters,
        pagination,
        loadMore,
    };
}
