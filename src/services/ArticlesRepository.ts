import type { Article, ApiResponse, SearchFilters } from '../types';

/**
 * Articles Repository - Encapsulates all article-related API calls
 * Following Repository pattern for clean separation of concerns
 */
export class ArticlesRepository {
    private baseUrl: string;

    constructor(baseUrl: string = '/api') {
        this.baseUrl = baseUrl;
    }

    /**
     * Get all articles with pagination and filters
     */
    async getArticles(
        page: number = 1,
        limit: number = 10,
        filters: SearchFilters = {}
    ): Promise<ApiResponse<Article[]>> {
        // Mock articles data
        const mockArticles: Article[] = [
            {
                id: '1',
                title: 'React Hooks: Guia Completo',
                slug: 'react-hooks-guia-completo',
                excerpt: 'Aprenda tudo sobre React Hooks, desde useState até custom hooks avançados.',
                content: '# React Hooks: Guia Completo\n\nOs React Hooks revolucionaram o desenvolvimento com React...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-15T10:00:00Z',
                tags: ['React', 'JavaScript', 'Hooks'],
                language: 'pt',
                readingTime: 8,
                featured: true,
            },
            {
                id: '2',
                title: 'TypeScript para Iniciantes',
                slug: 'typescript-para-iniciantes',
                excerpt: 'Introdução completa ao TypeScript para desenvolvedores JavaScript.',
                content: '# TypeScript para Iniciantes\n\nTypeScript é um superset do JavaScript...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-10T14:30:00Z',
                updatedAt: '2024-01-10T14:30:00Z',
                tags: ['TypeScript', 'JavaScript', 'Tutorial'],
                language: 'pt',
                readingTime: 12,
                featured: false,
            },
            {
                id: '3',
                title: 'Node.js Best Practices',
                slug: 'nodejs-best-practices',
                excerpt: 'Melhores práticas para desenvolvimento Node.js em produção.',
                content: '# Node.js Best Practices\n\nDesenvolver aplicações Node.js robustas...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-05T09:15:00Z',
                updatedAt: '2024-01-05T09:15:00Z',
                tags: ['Node.js', 'Backend', 'JavaScript'],
                language: 'pt',
                readingTime: 15,
                featured: true,
            },
            {
                id: '4',
                title: 'CSS Grid Layout Mastery',
                slug: 'css-grid-layout-mastery',
                excerpt: 'Domine o CSS Grid Layout para criar layouts modernos e responsivos.',
                content: '# CSS Grid Layout Mastery\n\nCSS Grid é uma ferramenta poderosa...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-01T16:45:00Z',
                updatedAt: '2024-01-01T16:45:00Z',
                tags: ['CSS', 'Layout', 'Grid'],
                language: 'pt',
                readingTime: 10,
                featured: false,
            },
            {
                id: '5',
                title: 'Python para Data Science',
                slug: 'python-para-data-science',
                excerpt: 'Introdução ao Python para análise de dados e ciência de dados.',
                content: '# Python para Data Science\n\nPython se tornou a linguagem padrão...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2023-12-28T11:20:00Z',
                updatedAt: '2023-12-28T11:20:00Z',
                tags: ['Python', 'Data Science', 'Analytics'],
                language: 'pt',
                readingTime: 18,
                featured: true,
            },
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 200));

        // Apply filters
        let filteredArticles = mockArticles;

        if (filters.query) {
            const query = filters.query.toLowerCase();
            filteredArticles = filteredArticles.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        if (filters.tags && filters.tags.length > 0) {
            filteredArticles = filteredArticles.filter(article =>
                filters.tags!.some(tag => article.tags.includes(tag))
            );
        }

        if (filters.language) {
            filteredArticles = filteredArticles.filter(article =>
                article.language === filters.language
            );
        }

        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

        return {
            data: paginatedArticles,
            pagination: {
                page,
                limit,
                total: filteredArticles.length,
                totalPages: Math.ceil(filteredArticles.length / limit),
                hasNext: endIndex < filteredArticles.length,
                hasPrev: page > 1,
            },
        };
    }

    /**
     * Get a single article by slug
     */
    async getArticleBySlug(slug: string): Promise<Article> {
        // Mock articles data (same as in getArticles)
        const mockArticles: Article[] = [
            {
                id: '1',
                title: 'React Hooks: Guia Completo',
                slug: 'react-hooks-guia-completo',
                excerpt: 'Aprenda tudo sobre React Hooks, desde useState até custom hooks avançados.',
                content: '# React Hooks: Guia Completo\n\nOs React Hooks revolucionaram o desenvolvimento com React, permitindo usar estado e outros recursos do React em componentes funcionais.\n\n## useState\n\nO hook mais básico para gerenciar estado...\n\n## useEffect\n\nPara efeitos colaterais...\n\n## Custom Hooks\n\nCriando seus próprios hooks...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-15T10:00:00Z',
                tags: ['React', 'JavaScript', 'Hooks'],
                language: 'pt',
                readingTime: 8,
                featured: true,
            },
            {
                id: '2',
                title: 'TypeScript para Iniciantes',
                slug: 'typescript-para-iniciantes',
                excerpt: 'Introdução completa ao TypeScript para desenvolvedores JavaScript.',
                content: '# TypeScript para Iniciantes\n\nTypeScript é um superset do JavaScript que adiciona tipagem estática...\n\n## Configuração\n\nComo configurar o TypeScript...\n\n## Tipos Básicos\n\nString, number, boolean...\n\n## Interfaces\n\nDefinindo estruturas de dados...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-10T14:30:00Z',
                updatedAt: '2024-01-10T14:30:00Z',
                tags: ['TypeScript', 'JavaScript', 'Tutorial'],
                language: 'pt',
                readingTime: 12,
                featured: false,
            },
            {
                id: '3',
                title: 'Node.js Best Practices',
                slug: 'nodejs-best-practices',
                excerpt: 'Melhores práticas para desenvolvimento Node.js em produção.',
                content: '# Node.js Best Practices\n\nDesenvolver aplicações Node.js robustas e escaláveis...\n\n## Estrutura de Projeto\n\nOrganizando seu código...\n\n## Error Handling\n\nTratamento de erros...\n\n## Performance\n\nOtimizações importantes...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-05T09:15:00Z',
                updatedAt: '2024-01-05T09:15:00Z',
                tags: ['Node.js', 'Backend', 'JavaScript'],
                language: 'pt',
                readingTime: 15,
                featured: true,
            },
            {
                id: '4',
                title: 'CSS Grid Layout Mastery',
                slug: 'css-grid-layout-mastery',
                excerpt: 'Domine o CSS Grid Layout para criar layouts modernos e responsivos.',
                content: '# CSS Grid Layout Mastery\n\nCSS Grid é uma ferramenta poderosa para criar layouts...\n\n## Grid Container\n\nDefinindo o container...\n\n## Grid Items\n\nPosicionando elementos...\n\n## Responsive Grid\n\nGrids responsivos...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2024-01-01T16:45:00Z',
                updatedAt: '2024-01-01T16:45:00Z',
                tags: ['CSS', 'Layout', 'Grid'],
                language: 'pt',
                readingTime: 10,
                featured: false,
            },
            {
                id: '5',
                title: 'Python para Data Science',
                slug: 'python-para-data-science',
                excerpt: 'Introdução ao Python para análise de dados e ciência de dados.',
                content: '# Python para Data Science\n\nPython se tornou a linguagem padrão para ciência de dados...\n\n## NumPy\n\nComputação numérica...\n\n## Pandas\n\nManipulação de dados...\n\n## Matplotlib\n\nVisualização de dados...',
                author: {
                    id: '1',
                    name: 'P. Sonats',
                    avatar: '/avatars/psonats.jpg',
                    bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
                    social: {
                        github: 'https://github.com/psonats',
                        linkedin: 'https://linkedin.com/in/psonats',
                        twitter: 'https://twitter.com/psonats'
                    }
                },
                publishedAt: '2023-12-28T11:20:00Z',
                updatedAt: '2023-12-28T11:20:00Z',
                tags: ['Python', 'Data Science', 'Analytics'],
                language: 'pt',
                readingTime: 18,
                featured: true,
            },
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 150));

        // Find article by slug
        const article = mockArticles.find(a => a.slug === slug);

        if (!article) {
            throw new Error('Article not found');
        }

        return article;
    }

    /**
     * Get featured articles
     */
    async getFeaturedArticles(limit: number = 5): Promise<Article[]> {
        // Get featured articles from mock data
        const response = await this.getArticles(1, 50); // Get all articles
        const featuredArticles = response.data.filter(article => article.featured);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));

        return featuredArticles.slice(0, limit);
    }

    /**
     * Get articles by tag
     */
    async getArticlesByTag(
        tag: string,
        page: number = 1,
        limit: number = 10
    ): Promise<ApiResponse<Article[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            tag,
        });

        const response = await fetch(`${this.baseUrl}/articles?${params}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch articles by tag: ${response.statusText}`
            );
        }

        return response.json();
    }

    /**
     * Get articles by language
     */
    async getArticlesByLanguage(
        language: string,
        page: number = 1,
        limit: number = 10
    ): Promise<ApiResponse<Article[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            language,
        });

        const response = await fetch(`${this.baseUrl}/articles?${params}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch articles by language: ${response.statusText}`
            );
        }

        return response.json();
    }

    /**
     * Search articles
     */
    async searchArticles(
        query: string,
        page: number = 1,
        limit: number = 10
    ): Promise<ApiResponse<Article[]>> {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            q: query,
        });

        const response = await fetch(`${this.baseUrl}/articles/search?${params}`);

        if (!response.ok) {
            throw new Error(`Failed to search articles: ${response.statusText}`);
        }

        return response.json();
    }

    /**
     * Get all available tags
     */
    async getTags(): Promise<string[]> {
        const response = await fetch(`${this.baseUrl}/articles/tags`);

        if (!response.ok) {
            throw new Error(`Failed to fetch tags: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || data;
    }

    /**
     * Get all available languages
     */
    async getLanguages(): Promise<string[]> {
        const response = await fetch(`${this.baseUrl}/articles/languages`);

        if (!response.ok) {
            throw new Error(`Failed to fetch languages: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || data;
    }
}
