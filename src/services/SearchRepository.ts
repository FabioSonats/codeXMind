import type { SearchResult } from '../types';

/**
 * Search Repository - Encapsulates all search-related API calls
 * Following Repository pattern for clean separation of concerns
 */
export class SearchRepository {
  constructor() {
    // Mock repository - no baseUrl needed
  }

  /**
   * Global search across articles and library items
   */
  async globalSearch(
    query: string,
    limit: number = 10
  ): Promise<SearchResult[]> {
    // Mock data for testing - avoid API calls
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'React Hooks Tutorial',
        type: 'article',
        excerpt:
          'Learn how to use React Hooks effectively in your applications',
        slug: 'react-hooks-tutorial',
        tags: ['React', 'JavaScript', 'Hooks'],
      },
      {
        id: '2',
        title: 'TypeScript Guide',
        type: 'library',
        excerpt: 'Complete guide to TypeScript for modern development',
        slug: 'typescript-guide',
        tags: ['TypeScript', 'JavaScript'],
      },
      {
        id: '3',
        title: 'CSS Grid Layout Mastery',
        type: 'article',
        excerpt: 'Master CSS Grid Layout for modern and responsive designs',
        slug: 'css-grid-layout-mastery',
        tags: ['CSS', 'Layout', 'Grid'],
      },
      {
        id: '4',
        title: 'Lógica de Programação com Python',
        type: 'article',
        excerpt:
          'Aprenda os fundamentos da lógica de programação usando Python',
        slug: 'logica-programacao-python',
        tags: ['Python', 'Lógica de Programação', 'Algoritmos'],
      },
      {
        id: '5',
        title: 'Programação Orientada a Objetos com JavaScript',
        type: 'article',
        excerpt:
          'Aprenda os conceitos fundamentais de Programação Orientada a Objetos usando JavaScript moderno',
        slug: 'programacao-orientada-objetos-javascript',
        tags: [
          'JavaScript',
          'OOP',
          'Programação Orientada a Objetos',
          'Classes',
        ],
      },
      {
        id: '4',
        title: 'CSS Grid Layout',
        type: 'library',
        excerpt: 'Master CSS Grid layout for modern web design',
        slug: 'css-grid-layout',
        tags: ['CSS', 'Layout', 'Grid'],
      },
      {
        id: '5',
        title: 'Python for Data Science',
        type: 'article',
        excerpt: 'Introduction to Python for data science and analysis',
        slug: 'python-data-science',
        tags: ['Python', 'Data Science', 'Analytics'],
      },
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Filter results based on query
    if (!query.trim()) {
      return mockResults.slice(0, limit);
    }

    return mockResults
      .filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          result.tags.some(tag =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      )
      .slice(0, limit);
  }

  /**
   * Get search suggestions/autocomplete
   */
  async getSuggestions(query: string, limit: number = 5): Promise<string[]> {
    if (query.length < 2) return [];

    // Mock suggestions
    const mockSuggestions = [
      'React Hooks',
      'TypeScript',
      'CSS Flexbox',
      'CSS Grid',
      'Python',
      'Lógica de Programação',
      'JavaScript',
      'OOP',
      'Programação Orientada a Objetos',
      'Vue.js',
      'Angular',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'AWS',
      'Machine Learning',
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));

    return mockSuggestions
      .filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, limit);
  }

  /**
   * Get trending searches
   */
  async getTrendingSearches(limit: number = 10): Promise<string[]> {
    // Mock trending searches
    const mockTrending = [
      'React Hooks',
      'TypeScript',
      'CSS Flexbox',
      'CSS Grid',
      'Python',
      'JavaScript',
      'Vue.js',
      'Angular',
      'Express.js',
      'MongoDB',
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));

    return mockTrending.slice(0, limit);
  }

  /**
   * Get popular tags
   */
  async getPopularTags(limit: number = 20): Promise<string[]> {
    // Mock popular tags
    const mockTags = [
      'React',
      'TypeScript',
      'JavaScript',
      'CSS Flexbox',
      'CSS',
      'HTML',
      'Python',
      'Lógica de Programação',
      'Algoritmos',
      'OOP',
      'Programação Orientada a Objetos',
      'Vue.js',
      'Angular',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Machine Learning',
      'Data Science',
      'Web Development',
      'Mobile Development',
      'DevOps',
      'UI/UX',
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));

    return mockTags.slice(0, limit);
  }

  /**
   * Get related searches
   */
  async getRelatedSearches(
    query: string,
    limit: number = 5
  ): Promise<string[]> {
    // Mock related searches based on query
    const relatedMap: Record<string, string[]> = {
      react: [
        'React Hooks',
        'React Router',
        'React Native',
        'Redux',
        'Next.js',
      ],
      typescript: [
        'TypeScript Interfaces',
        'TypeScript Generics',
        'TypeScript Config',
        'TypeScript React',
        'TypeScript Node',
      ],
      css: [
        'CSS Grid',
        'CSS Flexbox',
        'CSS Variables',
        'CSS Animations',
        'Tailwind CSS',
      ],
      python: [
        'Python Django',
        'Python Flask',
        'Python Data Science',
        'Python Machine Learning',
        'Python Web Scraping',
      ],
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50));

    // Find related searches based on query
    const lowerQuery = query.toLowerCase();
    for (const [key, related] of Object.entries(relatedMap)) {
      if (lowerQuery.includes(key)) {
        return related.slice(0, limit);
      }
    }

    // Default related searches
    return [
      'JavaScript',
      'Web Development',
      'Programming',
      'Tutorial',
      'Guide',
    ].slice(0, limit);
  }
}
