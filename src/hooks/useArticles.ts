import { useState, useEffect, useCallback } from 'react';
import type {
    Article,
    SearchFilters,
    UseArticlesReturn,
    PaginationInfo,
} from '../types';
import { ArticlesRepository } from '../services/ArticlesRepository';

/**
 * Custom hook for articles functionality
 * Handles articles state, pagination, and API calls
 */
export function useArticles(
    initialFilters: SearchFilters = {}
): UseArticlesReturn {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<SearchFilters>(initialFilters);
    const [pagination, setPagination] = useState<PaginationInfo | null>(null);

    const fetchArticles = useCallback(
        async (
            page: number = 1,
            limit: number = 10,
            currentFilters: SearchFilters = filters
        ) => {
            setLoading(true);
            setError(null);

            try {
                const articlesRepository = new ArticlesRepository();
                const response = await articlesRepository.getArticles(
                    page,
                    limit,
                    currentFilters
                );
                setArticles(response.data);
                setPagination(response.pagination || null);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : 'Erro ao carregar artigos'
                );
                setArticles([]);
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
            fetchArticles(1, 10, newFilters);
        },
        [fetchArticles]
    );


    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    return {
        articles,
        loading,
        error,
        filters,
        setFilters: updateFilters,
        pagination,
    };
}
