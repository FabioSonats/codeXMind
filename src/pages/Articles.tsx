import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  ClockIcon,
  UserIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { CategoriesRepository } from '../services/CategoriesRepository';
import { ArticlesRepository } from '../services/ArticlesRepository';
import type { Category, Article } from '../types';

/**
 * Articles Page Component
 * Displays categories with their articles organized in cards
 */
export default function Articles() {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [articlesByCategory, setArticlesByCategory] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get search from URL params
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Load categories and articles
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load categories
        const categoriesRepository = new CategoriesRepository();
        const categoriesData = await categoriesRepository.getCategories();
        setCategories(categoriesData);

        // Load articles for each category
        const articlesRepository = new ArticlesRepository();
        const allArticles = await articlesRepository.getArticles(1, 100, { type: 'article' });
        
        // Group articles by category
        const grouped: Record<string, Article[]> = {};
        allArticles.data.forEach(article => {
          if (!grouped[article.category]) {
            grouped[article.category] = [];
          }
          grouped[article.category].push(article);
        });
        
        setArticlesByCategory(grouped);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter categories and articles based on search
  const filteredCategories = categories.filter(category => {
    if (!searchQuery) return true;
    return (
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      articlesByCategory[category.slug]?.some(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  // Estilos para a página
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    padding: '2rem 0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#94a3b8',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const searchContainerStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '1.5rem',
    padding: '2rem',
    marginBottom: '3rem',
    border: '1px solid #334155',
    backdropFilter: 'blur(10px)',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    fontSize: '1rem',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.75rem',
    color: 'white',
    outline: 'none',
  };

  const searchIconStyle = {
    position: 'absolute' as const,
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    width: '20px',
    height: '20px',
  };

  const categoriesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  };

  const categoryCardStyle = {
    backgroundColor: '#1e293b',
    borderRadius: '1.5rem',
    padding: '2rem',
    border: '1px solid #334155',
    transition: 'all 0.3s ease',
  };

  const categoryHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const categoryIconStyle = {
    fontSize: '2.5rem',
  };

  const categoryTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
  };

  const categoryDescriptionStyle = {
    color: '#94a3b8',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
  };

  const articlesListStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  };

  const articleItemStyle = {
    backgroundColor: '#0f172a',
    borderRadius: '0.75rem',
    padding: '1.25rem',
    border: '1px solid #334155',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    color: 'white',
    display: 'block',
  };

  const articleTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
    lineHeight: '1.4',
  };

  const articleExcerptStyle = {
    color: '#94a3b8',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    marginBottom: '0.75rem',
  };

  const articleMetaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '0.75rem',
    color: '#64748b',
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  const viewAllStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
    padding: '0.75rem',
    backgroundColor: '#22d3ee',
    color: '#0f172a',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  };

  if (loading) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.25rem', padding: '4rem 0' }}>
            Carregando artigos...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', color: '#ef4444', fontSize: '1.25rem', padding: '4rem 0' }}>
            Erro: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Artigos</h1>
          <p style={subtitleStyle}>
            Explore nossa coleção de artigos organizados por categoria. 
            Encontre conteúdo específico sobre suas tecnologias favoritas.
          </p>
        </div>

        {/* Search Bar */}
        <div style={searchContainerStyle}>
          <div style={{ position: 'relative' }}>
            <MagnifyingGlassIcon style={searchIconStyle} />
            <input
              type="text"
              placeholder="Buscar por categoria ou artigo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={searchInputStyle}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div style={categoriesGridStyle}>
          {filteredCategories.map((category) => {
            const articles = articlesByCategory[category.slug] || [];
            const displayArticles = articles.slice(0, 3); // Show max 3 articles per category
            
            return (
              <div key={category.id} style={categoryCardStyle}>
                {/* Category Header */}
                <div style={categoryHeaderStyle}>
                  <span style={categoryIconStyle}>{category.icon}</span>
                  <h3 style={categoryTitleStyle}>{category.name}</h3>
                </div>

                {/* Category Description */}
                <p style={categoryDescriptionStyle}>{category.description}</p>

                {/* Articles List */}
                <div style={articlesListStyle}>
                  {displayArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/artigos/${article.slug}`}
                      style={articleItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#22d3ee';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#334155';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <h4 style={articleTitleStyle}>{article.title}</h4>
                      <p style={articleExcerptStyle}>{article.excerpt}</p>
                      <div style={articleMetaStyle}>
                        <div style={metaItemStyle}>
                          <ClockIcon style={{ width: '14px', height: '14px' }} />
                          {article.readingTime} min
                        </div>
                        <div style={metaItemStyle}>
                          <UserIcon style={{ width: '14px', height: '14px' }} />
                          {article.author.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                {articles.length > 3 && (
                  <Link
                    to={`/artigos?category=${category.slug}`}
                    style={viewAllStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#06b6d4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#22d3ee';
                    }}
                  >
                    Ver todos os {articles.length} artigos
                    <ChevronRightIcon style={{ width: '16px', height: '16px' }} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && searchQuery && (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Nenhum resultado encontrado para "{searchQuery}"
            </p>
            <p>Tente buscar por outros termos ou explore nossas categorias.</p>
          </div>
        )}
      </div>
    </div>
  );
}