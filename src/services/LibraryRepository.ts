import { LibraryItem, ApiResponse, SearchFilters } from '../types';

/**
 * Library Repository - Encapsulates all library-related API calls
 * Following Repository pattern for clean separation of concerns
 */
export class LibraryRepository {
    private baseUrl: string;

    constructor(baseUrl: string = '/api') {
        this.baseUrl = baseUrl;
    }

    /**
     * Get all library items with pagination and filters
     */
    async getLibraryItems(
        page: number = 1,
        limit: number = 12,
        filters: SearchFilters = {}
    ): Promise<ApiResponse<LibraryItem[]>> {
        // Mock library items data
        const mockItems: LibraryItem[] = [
            {
                id: '1',
                title: 'React Cheat Sheet',
                description: 'Guia rápido de referência para React',
                type: 'cheatsheet',
                language: 'pt',
                tags: ['React', 'JavaScript', 'Reference'],
                level: 'intermediate',
                downloadUrl: '/downloads/react-cheatsheet.pdf',
                previewUrl: '/preview/react-cheatsheet',
                fileSize: '2.5 MB',
                format: 'PDF',
                featured: true,
                createdAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-15T10:00:00Z',
            },
            {
                id: '2',
                title: 'TypeScript Handbook',
                description: 'Manual completo do TypeScript',
                type: 'ebook',
                language: 'pt',
                tags: ['TypeScript', 'JavaScript', 'Handbook'],
                level: 'beginner',
                downloadUrl: '/downloads/typescript-handbook.pdf',
                previewUrl: '/preview/typescript-handbook',
                fileSize: '5.2 MB',
                format: 'PDF',
                featured: false,
                createdAt: '2024-01-10T14:30:00Z',
                updatedAt: '2024-01-10T14:30:00Z',
            },
            {
                id: '3',
                title: 'Node.js Snippets',
                description: 'Códigos úteis para desenvolvimento Node.js',
                type: 'snippets',
                language: 'pt',
                tags: ['Node.js', 'JavaScript', 'Snippets'],
                level: 'advanced',
                downloadUrl: '/downloads/nodejs-snippets.zip',
                previewUrl: '/preview/nodejs-snippets',
                fileSize: '1.8 MB',
                format: 'ZIP',
                featured: true,
                createdAt: '2024-01-05T09:15:00Z',
                updatedAt: '2024-01-05T09:15:00Z',
            },
            {
                id: '4',
                title: 'CSS Grid Guide',
                description: 'Guia completo de CSS Grid Layout',
                type: 'ebook',
                language: 'pt',
                tags: ['CSS', 'Layout', 'Grid'],
                level: 'intermediate',
                downloadUrl: '/downloads/css-grid-guide.pdf',
                previewUrl: '/preview/css-grid-guide',
                fileSize: '3.1 MB',
                format: 'PDF',
                featured: false,
                createdAt: '2024-01-01T16:45:00Z',
                updatedAt: '2024-01-01T16:45:00Z',
            },
            {
                id: '5',
                title: 'Python Data Science Toolkit',
                description: 'Ferramentas essenciais para Data Science com Python',
                type: 'cheatsheet',
                language: 'pt',
                tags: ['Python', 'Data Science', 'Analytics'],
                level: 'advanced',
                downloadUrl: '/downloads/python-datascience-toolkit.pdf',
                previewUrl: '/preview/python-datascience-toolkit',
                fileSize: '4.7 MB',
                format: 'PDF',
                featured: true,
                createdAt: '2023-12-28T11:20:00Z',
                updatedAt: '2023-12-28T11:20:00Z',
            },
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));

        // Apply filters
        let filteredItems = mockItems;

        if (filters.query) {
            const query = filters.query.toLowerCase();
            filteredItems = filteredItems.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        if (filters.tags && filters.tags.length > 0) {
            filteredItems = filteredItems.filter(item =>
                filters.tags!.some(tag => item.tags.includes(tag))
            );
        }

        if (filters.language) {
            filteredItems = filteredItems.filter(item =>
                item.language === filters.language
            );
        }

        if (filters.type && filters.type !== 'all') {
            filteredItems = filteredItems.filter(item =>
                item.type === filters.type
            );
        }

        if (filters.level && filters.level !== 'all') {
            filteredItems = filteredItems.filter(item =>
                item.level === filters.level
            );
        }

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = filteredItems.slice(startIndex, endIndex);

        return {
            data: paginatedItems,
            pagination: {
                page,
                limit,
                total: filteredItems.length,
                totalPages: Math.ceil(filteredItems.length / limit),
                hasNext: endIndex < filteredItems.length,
                hasPrev: page > 1,
            },
        };
    }

    /**
     * Get a single library item by ID
     */
    async getLibraryItem(id: string): Promise<LibraryItem> {
        const response = await fetch(`${this.baseUrl}/library/${id}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Library item not found');
            }
            throw new Error(`Failed to fetch library item: ${response.statusText}`);
        }

        return response.json();
    }

    /**
     * Get featured library items
     */
    async getFeaturedItems(limit: number = 6): Promise<LibraryItem[]> {
        const response = await fetch(
            `${this.baseUrl}/library/featured?limit=${limit}`
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch featured library items: ${response.statusText}`
            );
        }

        const data = await response.json();
        return data.data || data;
    }

    /**
     * Get library items by type
     */
    async getItemsByType(
        type: string,
        page: number = 1,
        limit: number = 12
    ): Promise<ApiResponse<LibraryItem[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            type,
        });

        const response = await fetch(`${this.baseUrl}/library?${params}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch library items by type: ${response.statusText}`
            );
        }

        return response.json();
    }

    /**
     * Get library items by language
     */
    async getItemsByLanguage(
        language: string,
        page: number = 1,
        limit: number = 12
    ): Promise<ApiResponse<LibraryItem[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            language,
        });

        const response = await fetch(`${this.baseUrl}/library?${params}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch library items by language: ${response.statusText}`
            );
        }

        return response.json();
    }

    /**
     * Get library items by level
     */
    async getItemsByLevel(
        level: string,
        page: number = 1,
        limit: number = 12
    ): Promise<ApiResponse<LibraryItem[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            level,
        });

        const response = await fetch(`${this.baseUrl}/library?${params}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch library items by level: ${response.statusText}`
            );
        }

        return response.json();
    }

    /**
     * Search library items
     */
    async searchItems(
        query: string,
        page: number = 1,
        limit: number = 12
    ): Promise<ApiResponse<LibraryItem[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            q: query,
        });

        const response = await fetch(`${this.baseUrl}/library/search?${params}`);

        if (!response.ok) {
            throw new Error(`Failed to search library items: ${response.statusText}`);
        }

        return response.json();
    }

    /**
     * Get all available types
     */
    async getTypes(): Promise<string[]> {
        const response = await fetch(`${this.baseUrl}/library/types`);

        if (!response.ok) {
            throw new Error(`Failed to fetch types: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || data;
    }

    /**
     * Get all available levels
     */
    async getLevels(): Promise<string[]> {
        const response = await fetch(`${this.baseUrl}/library/levels`);

        if (!response.ok) {
            throw new Error(`Failed to fetch levels: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || data;
    }

    /**
     * Download a library item
     */
    async downloadItem(id: string): Promise<Blob> {
        const response = await fetch(`${this.baseUrl}/library/${id}/download`);

        if (!response.ok) {
            throw new Error(`Failed to download item: ${response.statusText}`);
        }

        return response.blob();
    }
}
