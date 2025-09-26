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
                description: 'JavaScript moderno, ES6+ e frameworks',
                icon: '🟨',
                color: '#f7df1e',
                articleCount: 3,
            },
            {
                id: '2',
                name: 'React',
                slug: 'react',
                description: 'React, Hooks, Context e ecossistema',
                icon: '⚛️',
                color: '#61dafb',
                articleCount: 3,
            },
            {
                id: '3',
                name: 'Python',
                slug: 'python',
                description: 'Python para desenvolvimento e ciência de dados',
                icon: '🐍',
                color: '#3776ab',
                articleCount: 2,
            },
            {
                id: '4',
                name: 'CSS',
                slug: 'css',
                description: 'CSS moderno, Grid, Flexbox e técnicas avançadas',
                icon: '🎨',
                color: '#1572b6',
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
            {
                id: '6',
                name: 'Notícias',
                slug: 'noticias',
                description: 'Últimas notícias e tendências em tecnologia',
                icon: '📰',
                color: '#ff6b6b',
                articleCount: 2,
            },
            {
                id: '7',
                name: 'Node.js',
                slug: 'nodejs',
                description: 'Node.js, Express e desenvolvimento backend',
                icon: '🟢',
                color: '#339933',
                articleCount: 0,
            },
            {
                id: '8',
                name: 'DevOps',
                slug: 'devops',
                description: 'DevOps, Docker, CI/CD e infraestrutura',
                icon: '🐳',
                color: '#2496ed',
                articleCount: 0,
            },
            {
                id: '9',
                name: 'Machine Learning',
                slug: 'machine-learning',
                description: 'Machine Learning, IA e algoritmos',
                icon: '🤖',
                color: '#ff9f43',
                articleCount: 0,
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
