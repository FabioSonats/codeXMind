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
        excerpt:
          'Aprenda tudo sobre React Hooks, desde useState até custom hooks avançados.',
        content:
          '# React Hooks: Guia Completo\n\nOs React Hooks revolucionaram o desenvolvimento com React...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
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
        excerpt:
          'Introdução completa ao TypeScript para desenvolvedores JavaScript.',
        content:
          '# TypeScript para Iniciantes\n\nTypeScript é um superset do JavaScript...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
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
        title: 'CSS Grid Layout Mastery',
        slug: 'css-grid-layout-mastery',
        excerpt:
          'Domine o CSS Grid Layout para criar layouts modernos e responsivos.',
        content: `# CSS Grid Layout Mastery

O CSS Grid é uma das ferramentas mais poderosas para criar layouts modernos e responsivos. Ele permite criar layouts bidimensionais complexos com facilidade, oferecendo controle total sobre a posição e o tamanho dos elementos.

## O que é CSS Grid?

CSS Grid é um sistema de layout bidimensional que permite criar layouts complexos usando linhas e colunas. Diferente do Flexbox, que é unidimensional, o Grid permite controlar tanto a direção horizontal quanto vertical dos elementos.

## Configuração Básica

Para começar a usar CSS Grid, você precisa definir um container como grid:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}
\`\`\`

### Propriedades Principais

- **grid-template-columns**: Define o número e tamanho das colunas
- **grid-template-rows**: Define o número e tamanho das linhas
- **gap**: Define o espaçamento entre os itens
- **grid-template-areas**: Permite nomear áreas do grid

## Unidades de Medida

### fr (Fractional Unit)
A unidade \`fr\` representa uma fração do espaço disponível:

\`\`\`css
.grid {
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
}
\`\`\`

### repeat()
A função \`repeat()\` simplifica a criação de grids repetitivos:

\`\`\`css
.grid {
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsivo */
}
\`\`\`

## Posicionamento de Itens

### Grid Lines
Você pode posicionar itens usando as linhas do grid:

\`\`\`css
.item {
  grid-column: 1 / 3; /* Da linha 1 à linha 3 */
  grid-row: 2 / 4;    /* Da linha 2 à linha 4 */
}
\`\`\`

### Grid Areas
Uma forma mais semântica de posicionar elementos:

\`\`\`css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Layouts Responsivos

### Auto-fit e Auto-fill
Crie layouts que se adaptam automaticamente:

\`\`\`css
.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Media Queries
Combine Grid com media queries para diferentes breakpoints:

\`\`\`css
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Exemplos Práticos

### Layout de Blog
\`\`\`css
.blog-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto auto 1fr auto auto;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .blog-layout {
    grid-template-areas:
      "header header"
      "nav nav"
      "main sidebar"
      "footer footer";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto 1fr auto;
  }
}
\`\`\`

### Galeria de Imagens
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
\`\`\`

### Dashboard
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { 
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
\`\`\`

## Alinhamento

### justify-items e align-items
Controle o alinhamento dos itens dentro de suas células:

\`\`\`css
.grid {
  justify-items: center; /* Alinhamento horizontal */
  align-items: center;   /* Alinhamento vertical */
}
\`\`\`

### justify-content e align-content
Controle o alinhamento do grid como um todo:

\`\`\`css
.grid {
  justify-content: space-between;
  align-content: center;
}
\`\`\`

## Dicas e Boas Práticas

1. **Use Grid para layouts principais**: Grid é ideal para estruturas de página
2. **Combine com Flexbox**: Use Flexbox para componentes internos
3. **Nomes semânticos**: Use \`grid-template-areas\` para layouts mais legíveis
4. **Teste responsividade**: Sempre teste em diferentes tamanhos de tela
5. **Fallbacks**: Forneça fallbacks para navegadores mais antigos

## Conclusão

CSS Grid revolucionou a forma como criamos layouts web. Com sua flexibilidade e poder, você pode criar designs complexos e responsivos de forma mais eficiente. Pratique com os exemplos fornecidos e experimente diferentes combinações para dominar essa ferramenta essencial do desenvolvimento web moderno.`,
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
        title: 'Python para Data Science',
        slug: 'python-para-data-science',
        excerpt:
          'Introdução ao Python para análise de dados e ciência de dados.',
        content:
          '# Python para Data Science\n\nPython se tornou a linguagem padrão...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
        },
        publishedAt: '2024-01-01T16:45:00Z',
        updatedAt: '2024-01-01T16:45:00Z',
        tags: ['Python', 'Data Science', 'Analytics'],
        language: 'pt',
        readingTime: 15,
        featured: false,
      },
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    // Apply filters
    let filteredArticles = mockArticles;

    if (filters.query) {
      const query = filters.query.toLowerCase();
      filteredArticles = filteredArticles.filter(
        article =>
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
      filteredArticles = filteredArticles.filter(
        article => article.language === filters.language
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
        excerpt:
          'Aprenda tudo sobre React Hooks, desde useState até custom hooks avançados.',
        content:
          '# React Hooks: Guia Completo\n\nOs React Hooks revolucionaram o desenvolvimento com React, permitindo usar estado e outros recursos do React em componentes funcionais.\n\n## useState\n\nO hook mais básico para gerenciar estado...\n\n## useEffect\n\nPara efeitos colaterais...\n\n## Custom Hooks\n\nCriando seus próprios hooks...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
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
        excerpt:
          'Introdução completa ao TypeScript para desenvolvedores JavaScript.',
        content:
          '# TypeScript para Iniciantes\n\nTypeScript é um superset do JavaScript que adiciona tipagem estática...\n\n## Configuração\n\nComo configurar o TypeScript...\n\n## Tipos Básicos\n\nString, number, boolean...\n\n## Interfaces\n\nDefinindo estruturas de dados...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
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
        title: 'CSS Grid Layout Mastery',
        slug: 'css-grid-layout-mastery',
        excerpt:
          'Domine o CSS Grid Layout para criar layouts modernos e responsivos.',
        content: `# CSS Grid Layout Mastery

O CSS Grid é uma das ferramentas mais poderosas para criar layouts modernos e responsivos. Ele permite criar layouts bidimensionais complexos com facilidade, oferecendo controle total sobre a posição e o tamanho dos elementos.

## O que é CSS Grid?

CSS Grid é um sistema de layout bidimensional que permite criar layouts complexos usando linhas e colunas. Diferente do Flexbox, que é unidimensional, o Grid permite controlar tanto a direção horizontal quanto vertical dos elementos.

## Configuração Básica

Para começar a usar CSS Grid, você precisa definir um container como grid:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}
\`\`\`

### Propriedades Principais

- **grid-template-columns**: Define o número e tamanho das colunas
- **grid-template-rows**: Define o número e tamanho das linhas
- **gap**: Define o espaçamento entre os itens
- **grid-template-areas**: Permite nomear áreas do grid

## Unidades de Medida

### fr (Fractional Unit)
A unidade \`fr\` representa uma fração do espaço disponível:

\`\`\`css
.grid {
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
}
\`\`\`

### repeat()
A função \`repeat()\` simplifica a criação de grids repetitivos:

\`\`\`css
.grid {
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsivo */
}
\`\`\`

## Posicionamento de Itens

### Grid Lines
Você pode posicionar itens usando as linhas do grid:

\`\`\`css
.item {
  grid-column: 1 / 3; /* Da linha 1 à linha 3 */
  grid-row: 2 / 4;    /* Da linha 2 à linha 4 */
}
\`\`\`

### Grid Areas
Uma forma mais semântica de posicionar elementos:

\`\`\`css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Layouts Responsivos

### Auto-fit e Auto-fill
Crie layouts que se adaptam automaticamente:

\`\`\`css
.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Media Queries
Combine Grid com media queries para diferentes breakpoints:

\`\`\`css
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Exemplos Práticos

### Layout de Blog
\`\`\`css
.blog-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto auto 1fr auto auto;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .blog-layout {
    grid-template-areas:
      "header header"
      "nav nav"
      "main sidebar"
      "footer footer";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto 1fr auto;
  }
}
\`\`\`

### Galeria de Imagens
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
\`\`\`

### Dashboard
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { 
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
\`\`\`

## Alinhamento

### justify-items e align-items
Controle o alinhamento dos itens dentro de suas células:

\`\`\`css
.grid {
  justify-items: center; /* Alinhamento horizontal */
  align-items: center;   /* Alinhamento vertical */
}
\`\`\`

### justify-content e align-content
Controle o alinhamento do grid como um todo:

\`\`\`css
.grid {
  justify-content: space-between;
  align-content: center;
}
\`\`\`

## Dicas e Boas Práticas

1. **Use Grid para layouts principais**: Grid é ideal para estruturas de página
2. **Combine com Flexbox**: Use Flexbox para componentes internos
3. **Nomes semânticos**: Use \`grid-template-areas\` para layouts mais legíveis
4. **Teste responsividade**: Sempre teste em diferentes tamanhos de tela
5. **Fallbacks**: Forneça fallbacks para navegadores mais antigos

## Conclusão

CSS Grid revolucionou a forma como criamos layouts web. Com sua flexibilidade e poder, você pode criar designs complexos e responsivos de forma mais eficiente. Pratique com os exemplos fornecidos e experimente diferentes combinações para dominar essa ferramenta essencial do desenvolvimento web moderno.`,
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
        id: '5',
        title: 'Python para Data Science',
        slug: 'python-para-data-science',
        excerpt:
          'Introdução ao Python para análise de dados e ciência de dados.',
        content:
          '# Python para Data Science\n\nPython se tornou a linguagem padrão para ciência de dados...\n\n## NumPy\n\nComputação numérica...\n\n## Pandas\n\nManipulação de dados...\n\n## Matplotlib\n\nVisualização de dados...',
        author: {
          id: '1',
          name: 'P. Sonats',
          avatar: '/avatars/psonats.jpg',
          bio: 'Desenvolvedor Full-Stack e criador de conteúdo técnico',
          social: {
            github: 'https://github.com/psonats',
            linkedin: 'https://linkedin.com/in/psonats',
            twitter: 'https://twitter.com/psonats',
          },
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
