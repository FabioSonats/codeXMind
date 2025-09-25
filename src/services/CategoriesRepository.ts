import type { Category } from '../types';

/**
 * Categories Repository - Manages article categories
 */
export class CategoriesRepository {
    /**
     * Get all categories with article counts
     */
    async getCategories(): Promise<Category[]> {
        // Mock categories data
        const categories: Category[] = [
            {
                id: '1',
                name: 'JavaScript',
                slug: 'javascript',
                description: 'Artigos sobre JavaScript, ES6+, Node.js e frameworks',
                icon: '🟨',
                color: '#f7df1e',
                articleCount: 2,
            },
            {
                id: '2',
                name: 'CSS',
                slug: 'css',
                description: 'CSS moderno, Grid, Flexbox e técnicas avançadas',
                icon: '🎨',
                color: '#1572b6',
                articleCount: 1,
            },
            {
                id: '3',
                name: 'Python',
                slug: 'python',
                description: 'Python para desenvolvimento e ciência de dados',
                icon: '🐍',
                color: '#3776ab',
                articleCount: 1,
            },
            {
                id: '4',
                name: 'React',
                slug: 'react',
                description: 'React, Hooks, Context e ecossistema',
                icon: '⚛️',
                color: '#61dafb',
                articleCount: 1,
            },
            {
                id: '5',
                name: 'TypeScript',
                slug: 'typescript',
                description: 'TypeScript para desenvolvimento tipado',
                icon: '🔷',
                color: '#3178c6',
                articleCount: 1,
            },
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));

        return categories;
    }

    /**
     * Get a single category by slug
     */
    async getCategoryBySlug(slug: string): Promise<Category | null> {
        const categories = await this.getCategories();
        return categories.find(category => category.slug === slug) || null;
    }
}
