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
   * Load articles from separate JSON files
   */
  private async loadArticlesFromFiles(): Promise<Article[]> {
    try {
      // In a real application, you would fetch these files
      // For now, we'll import them statically
      const articles: Article[] = [];

      // Import each article file
      const reactHooks = await import(
        '../../mock-data/articles/react-hooks-tutorial.json'
      );
      const typescript = await import(
        '../../mock-data/articles/typescript-guide.json'
      );
      const cssGrid = await import(
        '../../mock-data/articles/css-grid-layout-mastery.json'
      );
      const pythonLogic = await import(
        '../../mock-data/articles/logica-programacao-python.json'
      );
      const oopJavaScript = await import(
        '../../mock-data/articles/programacao-orientada-objetos-javascript.json'
      );

      articles.push(
        reactHooks.default,
        typescript.default,
        cssGrid.default,
        pythonLogic.default,
        oopJavaScript.default
      );

      return articles;
    } catch (error) {
      console.error('Error loading articles from files:', error);
      // Fallback to inline mock data
      return this.getFallbackArticles();
    }
  }

  /**
   * Fallback articles data in case file loading fails
   */
  private getFallbackArticles(): Article[] {
    return [
      {
        id: '1',
        title: 'React Hooks Tutorial',
        slug: 'react-hooks-tutorial',
        excerpt:
          'Learn how to use React Hooks effectively in your applications',
        content:
          '# React Hooks Tutorial\n\nReact Hooks revolutionized how we write React components...',
        author: {
          id: '1',
          name: 'Fábio Ferreira',
          avatar: '/avatars/fabio.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/FabioSonats',
            linkedin:
              'https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/',
            portfolio: 'https://fabiosonats.github.io/my-portifolio/',
          },
        },
        publishedAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T10:30:00Z',
        tags: ['React', 'JavaScript', 'Hooks'],
        language: 'pt',
        readingTime: 8,
        featured: true,
      },
      {
        id: '2',
        title: 'TypeScript Guide',
        slug: 'typescript-guide',
        excerpt: 'Complete guide to TypeScript for modern development',
        content:
          '# TypeScript Guide\n\nTypeScript is a strongly typed programming language...',
        author: {
          id: '1',
          name: 'Fábio Ferreira',
          avatar: '/avatars/fabio.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/FabioSonats',
            linkedin:
              'https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/',
            portfolio: 'https://fabiosonats.github.io/my-portifolio/',
          },
        },
        publishedAt: '2024-01-10T14:20:00Z',
        updatedAt: '2024-01-10T14:20:00Z',
        tags: ['TypeScript', 'JavaScript', 'Programming'],
        language: 'pt',
        readingTime: 12,
        featured: true,
      },
      {
        id: '3',
        title: 'CSS Grid Layout Mastery',
        slug: 'css-grid-layout-mastery',
        excerpt: 'Master CSS Grid Layout for modern and responsive designs',
        content:
          '# CSS Grid Layout Mastery\n\nO CSS Grid é uma das ferramentas mais poderosas...',
        author: {
          id: '1',
          name: 'Fábio Ferreira',
          avatar: '/avatars/fabio.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/FabioSonats',
            linkedin:
              'https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/',
            portfolio: 'https://fabiosonats.github.io/my-portifolio/',
          },
        },
        publishedAt: '2024-01-05T09:15:00Z',
        updatedAt: '2024-01-05T09:15:00Z',
        tags: ['CSS', 'Layout', 'Grid'],
        language: 'pt',
        readingTime: 10,
        featured: true,
      },
      {
        id: '4',
        title: 'Lógica de Programação com Python',
        slug: 'logica-programacao-python',
        excerpt:
          'Aprenda os fundamentos da lógica de programação usando Python como linguagem de ensino',
        content:
          '# Lógica de Programação com Python\n\nA lógica de programação é a base fundamental...',
        author: {
          id: '1',
          name: 'Fábio Ferreira',
          avatar: '/avatars/fabio.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/FabioSonats',
            linkedin:
              'https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/',
            portfolio: 'https://fabiosonats.github.io/my-portifolio/',
          },
        },
        publishedAt: '2024-01-20T14:30:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        tags: ['Python', 'Lógica de Programação', 'Algoritmos'],
        language: 'pt',
        readingTime: 15,
        featured: true,
      },
      {
        id: '5',
        title: 'Programação Orientada a Objetos com JavaScript',
        slug: 'programacao-orientada-objetos-javascript',
        excerpt:
          'Aprenda os conceitos fundamentais de Programação Orientada a Objetos usando JavaScript moderno',
        content:
          '# Programação Orientada a Objetos com JavaScript\n\nA Programação Orientada a Objetos (OOP) é um paradigma de programação que organiza o código em objetos...',
        author: {
          id: '1',
          name: 'Fábio Ferreira',
          avatar: '/avatars/fabio.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/FabioSonats',
            linkedin:
              'https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/',
            portfolio: 'https://fabiosonats.github.io/my-portifolio/',
          },
        },
        publishedAt: '2024-01-25T16:45:00Z',
        updatedAt: '2024-01-25T16:45:00Z',
        tags: [
          'JavaScript',
          'OOP',
          'Programação Orientada a Objetos',
          'Classes',
        ],
        language: 'pt',
        readingTime: 20,
        featured: true,
      },
    ];
  }

  /**
   * Get all articles with pagination and filters
   */
  async getArticles(
    page: number = 1,
    limit: number = 10,
    filters: SearchFilters = {}
  ): Promise<ApiResponse<Article[]>> {
    // Load articles from separate JSON files
    const mockArticles: Article[] = await this.loadArticlesFromFiles();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    // Apply filters
    let filteredArticles = mockArticles;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredArticles = filteredArticles.filter(
        article =>
          article.title.toLowerCase().includes(searchTerm) ||
          article.excerpt.toLowerCase().includes(searchTerm) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filters.tags && filters.tags.length > 0) {
      filteredArticles = filteredArticles.filter(article =>
        filters.tags!.some(tag => article.tags.includes(tag))
      );
    }

    if (filters.featured !== undefined) {
      filteredArticles = filteredArticles.filter(
        article => article.featured === filters.featured
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
      },
    };
  }

  /**
   * Get a single article by slug
   */
  async getArticleBySlug(slug: string): Promise<Article | null> {
    // Load articles from separate JSON files
    const mockArticles: Article[] = await this.loadArticlesFromFiles();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));

    // Find article by slug
    const article = mockArticles.find(article => article.slug === slug);
    return article || null;
  }

  /**
   * Get featured articles
   */
  async getFeaturedArticles(limit: number = 3): Promise<Article[]> {
    // Load articles from separate JSON files
    const mockArticles: Article[] = await this.loadArticlesFromFiles();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Filter and return featured articles
    return mockArticles.filter(article => article.featured).slice(0, limit);
  }
}
