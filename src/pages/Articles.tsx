import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  EyeIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { ArticlesRepository } from '../services/ArticlesRepository';
import type { Article } from '../types';

/**
 * Articles Page Component
 * Displays all articles with search, filtering, and sorting capabilities
 */
export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'readingTime'>('popular');

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const articlesRepository = new ArticlesRepository();
        const response = await articlesRepository.getArticles(1, 100, {
          type: 'article',
          query: searchQuery,
          tags: selectedTag ? [selectedTag] : undefined,
          language: selectedLanguage || undefined,
        });
        setArticles(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar artigos');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [searchQuery, selectedTag, selectedLanguage]);

  // Sort articles based on selected criteria
  const sortedArticles = [...articles].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        // Sort by featured first, then by reading time (shorter = more popular)
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.readingTime - b.readingTime;
      case 'recent':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'readingTime':
        return a.readingTime - b.readingTime;
      default:
        return 0;
    }
  });

  // Get all unique tags and languages
  const allTags = [...new Set(articles.flatMap(article => article.tags))];
  const allLanguages = [...new Set(articles.map(article => article.language))];

  // Styles
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
    marginBottom: '3rem',
    textAlign: 'center' as const,
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    color: '#94a3b8',
    fontSize: '1.25rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  };

  const searchAndFiltersContainerStyle = {
    marginBottom: '2rem',
  };

  const searchAndFiltersRowStyle = {
    display: 'flex',
    alignItems: 'stretch',
    gap: '1rem',
    marginBottom: '1rem',
  };

  const searchInputStyle = {
    flex: 1,
    padding: '0.875rem 0.875rem 0.875rem 2.75rem',
    fontSize: '0.875rem',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.5rem',
    color: 'white',
    outline: 'none',
  };

  const searchIconStyle = {
    position: 'absolute' as const,
    left: '0.875rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    width: '18px',
    height: '18px',
  };

  const filterButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1rem',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.5rem',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap' as const,
  };

  const activeFilterButtonStyle = {
    ...filterButtonStyle,
    backgroundColor: '#22d3ee',
    borderColor: '#22d3ee',
    color: '#0f172a',
  };

  const clearFiltersStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.875rem 0.75rem',
    backgroundColor: 'transparent',
    border: '1px solid #ef4444',
    borderRadius: '0.5rem',
    color: '#ef4444',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap' as const,
  };

  const filtersContainerStyle = {
    display: showFilters ? 'block' : 'none',
    backgroundColor: '#1e293b',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    border: '1px solid #334155',
    marginBottom: '2rem',
  };

  const filtersGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem',
  };

  const filterGroupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  };

  const filterLabelStyle = {
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: '500',
  };

  const filterSelectStyle = {
    padding: '0.5rem',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '0.375rem',
    color: 'white',
    fontSize: '0.875rem',
  };

  const sortContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const sortLabelStyle = {
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: '500',
  };

  const sortButtonsStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  const sortButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.375rem',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const activeSortButtonStyle = {
    ...sortButtonStyle,
    backgroundColor: '#22d3ee',
    borderColor: '#22d3ee',
    color: '#0f172a',
  };

  const articlesListStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  };

  const articleItemStyle = {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #334155',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: 'white',
    display: 'block',
  };

  const articleHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  };

  const articleTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
    lineHeight: '1.4',
    flex: 1,
  };

  const articleExcerptStyle = {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const articleMetaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.875rem',
    color: '#64748b',
    flexWrap: 'wrap' as const,
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  const tagsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap' as const,
  };

  const tagStyle = {
    backgroundColor: '#334155',
    color: '#cbd5e1',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
  };

  const featuredBadgeStyle = {
    backgroundColor: '#22d3ee',
    color: '#0f172a',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  const loadingStyle = {
    textAlign: 'center' as const,
    color: '#94a3b8',
    fontSize: '1.25rem',
    padding: '4rem 0',
  };

  const errorStyle = {
    textAlign: 'center' as const,
    color: '#ef4444',
    fontSize: '1.25rem',
    padding: '4rem 0',
  };

  const noResultsStyle = {
    textAlign: 'center' as const,
    color: '#94a3b8',
    fontSize: '1.125rem',
    padding: '4rem 0',
  };

  if (loading) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={loadingStyle}>Carregando artigos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={errorStyle}>Erro: {error}</div>
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
            Explore nossa coleção completa de artigos sobre tecnologia, programação e desenvolvimento.
          </p>
        </div>

        {/* Search and Filters */}
        <div style={searchAndFiltersContainerStyle}>
          <div style={searchAndFiltersRowStyle}>
            <div style={{ position: 'relative', flex: 1 }}>
              <MagnifyingGlassIcon style={searchIconStyle} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={searchInputStyle}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={showFilters ? activeFilterButtonStyle : filterButtonStyle}
            >
              <FunnelIcon style={{ width: '16px', height: '16px' }} />
              Filtros
            </button>
            {(selectedTag || selectedLanguage) && (
              <button
                onClick={() => {
                  setSelectedTag('');
                  setSelectedLanguage('');
                }}
                style={clearFiltersStyle}
              >
                Limpar
              </button>
            )}
          </div>

          {/* Filters Panel */}
          <div style={filtersContainerStyle}>
            <div style={filtersGridStyle}>
              <div style={filterGroupStyle}>
                <label style={filterLabelStyle}>Tag</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={filterSelectStyle}
                >
                  <option value="">Todas as tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
              <div style={filterGroupStyle}>
                <label style={filterLabelStyle}>Idioma</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  style={filterSelectStyle}
                >
                  <option value="">Todos os idiomas</option>
                  {allLanguages.map(lang => (
                    <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sort Options */}
        <div style={sortContainerStyle}>
          <span style={sortLabelStyle}>Ordenar por:</span>
          <div style={sortButtonsStyle}>
            <button
              onClick={() => setSortBy('popular')}
              style={sortBy === 'popular' ? activeSortButtonStyle : sortButtonStyle}
            >
              <StarIcon style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
              Popular
            </button>
            <button
              onClick={() => setSortBy('recent')}
              style={sortBy === 'recent' ? activeSortButtonStyle : sortButtonStyle}
            >
              <ClockIcon style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
              Recente
            </button>
            <button
              onClick={() => setSortBy('readingTime')}
              style={sortBy === 'readingTime' ? activeSortButtonStyle : sortButtonStyle}
            >
              <ClockIcon style={{ width: '14px', height: '14px', marginRight: '0.25rem' }} />
              Tempo de Leitura
            </button>
          </div>
        </div>

        {/* Articles List */}
        {sortedArticles.length > 0 ? (
          <div style={articlesListStyle}>
            {sortedArticles.map((article) => (
              <Link
                key={article.id}
                to={`/artigos/${article.slug}`}
                style={articleItemStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22d3ee';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#334155';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={articleHeaderStyle}>
                  <div style={{ flex: 1 }}>
                    <h3 style={articleTitleStyle}>{article.title}</h3>
                    <p style={articleExcerptStyle}>{article.excerpt}</p>
                  </div>
                  {article.featured && (
                    <div style={featuredBadgeStyle}>
                      <StarIcon style={{ width: '12px', height: '12px' }} />
                      Destaque
                    </div>
                  )}
                </div>

                <div style={articleMetaStyle}>
                  <div style={metaItemStyle}>
                    <ClockIcon style={{ width: '14px', height: '14px' }} />
                    {article.readingTime} min de leitura
                  </div>
                  <div style={metaItemStyle}>
                    <UserIcon style={{ width: '14px', height: '14px' }} />
                    {article.author.name}
                  </div>
                  <div style={metaItemStyle}>
                    <EyeIcon style={{ width: '14px', height: '14px' }} />
                    {Math.floor(Math.random() * 1000) + 100} visualizações
                  </div>
                  <div style={metaItemStyle}>
                    <TagIcon style={{ width: '14px', height: '14px' }} />
                    <div style={tagsStyle}>
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} style={tagStyle}>
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span style={tagStyle}>+{article.tags.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={noResultsStyle}>
            <p>Nenhum artigo encontrado.</p>
            <p>Tente ajustar os filtros ou termos de busca.</p>
          </div>
        )}
      </div>
    </div>
  );
}