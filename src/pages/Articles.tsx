import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { useArticles } from '../hooks/useArticles';
import type { SearchFilters } from '../types';

/**
 * Articles Page Component
 * Displays paginated list of articles with filters and search
 */
export default function Articles() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const filters: SearchFilters = {
    query: searchQuery || undefined,
    tags: selectedTag ? [selectedTag] : undefined,
    language: selectedLanguage || undefined,
    type: 'article',
  };

  const { articles, loading, error, setFilters } = useArticles(filters);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({ ...filters, query });
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
    setFilters({ ...filters, tags: tag === selectedTag ? undefined : [tag] });
  };

  const handleLanguageFilter = (language: string) => {
    setSelectedLanguage(language === selectedLanguage ? '' : language);
    setFilters({
      ...filters,
      language: language === selectedLanguage ? undefined : language,
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('');
    setSelectedLanguage('');
    setFilters({ type: 'article' });
  };

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

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Artigos</h1>
          <p style={subtitleStyle}>
            Explore nossa coleção de artigos técnicos e tutoriais
          </p>
        </div>

        {/* Search and Filters */}
        <div
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1.5rem',
            padding: '2rem',
            marginBottom: '3rem',
            border: '1px solid #334155',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'stretch',
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                position: 'relative',
                flex: 1,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                  zIndex: 1,
                }}
              >
                <MagnifyingGlassIcon
                  style={{ width: '20px', height: '20px' }}
                />
              </div>
              <input
                type='text'
                placeholder='Buscar artigos...'
                value={searchQuery}
                onChange={e => handleSearch(e.target.value)}
                style={{
                  width: '100%',
                  height: '56px',
                  padding: '1rem 1rem 1rem 3rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '1rem',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#22d3ee';
                  e.target.style.boxShadow =
                    '0 0 0 3px rgba(34, 211, 238, 0.1)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#475569';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: '0 1.5rem',
                backgroundColor: '#1e293b',
                border: '1px solid #475569',
                borderRadius: '1rem',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                gap: '0.5rem',
                minWidth: '120px',
                boxSizing: 'border-box',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#334155';
                e.currentTarget.style.borderColor = '#22d3ee';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#1e293b';
                e.currentTarget.style.borderColor = '#475569';
              }}
            >
              <FunnelIcon style={{ width: '18px', height: '18px' }} />
              Filtros
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid #334155',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                }}
              >
                {/* Tags */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#cbd5e1',
                      marginBottom: '1rem',
                    }}
                  >
                    Tags
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {[
                      'React',
                      'TypeScript',
                      'Node.js',
                      'Python',
                      'JavaScript',
                      'CSS',
                    ].map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagFilter(tag)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '2rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          backgroundColor:
                            selectedTag === tag ? '#22d3ee' : '#334155',
                          color: selectedTag === tag ? '#0f172a' : '#cbd5e1',
                          border: 'none',
                        }}
                        onMouseEnter={e => {
                          if (selectedTag !== tag) {
                            e.currentTarget.style.backgroundColor = '#475569';
                          }
                        }}
                        onMouseLeave={e => {
                          if (selectedTag !== tag) {
                            e.currentTarget.style.backgroundColor = '#334155';
                          }
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#cbd5e1',
                      marginBottom: '1rem',
                    }}
                  >
                    Linguagens
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {[
                      'JavaScript',
                      'TypeScript',
                      'Python',
                      'Java',
                      'C++',
                      'Go',
                    ].map(language => (
                      <button
                        key={language}
                        onClick={() => handleLanguageFilter(language)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '2rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          backgroundColor:
                            selectedLanguage === language
                              ? '#22d3ee'
                              : '#334155',
                          color:
                            selectedLanguage === language
                              ? '#0f172a'
                              : '#cbd5e1',
                          border: 'none',
                        }}
                        onMouseEnter={e => {
                          if (selectedLanguage !== language) {
                            e.currentTarget.style.backgroundColor = '#475569';
                          }
                        }}
                        onMouseLeave={e => {
                          if (selectedLanguage !== language) {
                            e.currentTarget.style.backgroundColor = '#334155';
                          }
                        }}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  onClick={clearFilters}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid #334155',
                  animation: 'pulse 2s infinite',
                }}
              >
                <div
                  style={{
                    height: '1rem',
                    backgroundColor: '#334155',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                  }}
                ></div>
                <div
                  style={{
                    height: '0.75rem',
                    backgroundColor: '#334155',
                    borderRadius: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                ></div>
                <div
                  style={{
                    height: '0.75rem',
                    backgroundColor: '#334155',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      height: '1.5rem',
                      width: '4rem',
                      backgroundColor: '#334155',
                      borderRadius: '1rem',
                    }}
                  ></div>
                  <div
                    style={{
                      height: '1.5rem',
                      width: '5rem',
                      backgroundColor: '#334155',
                      borderRadius: '1rem',
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    height: '2rem',
                    backgroundColor: '#334155',
                    borderRadius: '0.5rem',
                  }}
                ></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
            }}
          >
            <p
              style={{
                color: '#f87171',
                fontSize: '1.125rem',
              }}
            >
              {error}
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            {articles.map(article => (
              <article
                key={article.id}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid #334155',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#22d3ee';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 10px 25px rgba(34, 211, 238, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#334155';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '0.75rem',
                      lineHeight: '1.4',
                    }}
                  >
                    <Link
                      to={`/artigos/${article.slug}`}
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      color: '#cbd5e1',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {article.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#334155',
                        color: '#22d3ee',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        borderRadius: '1rem',
                        gap: '0.25rem',
                      }}
                    >
                      <TagIcon style={{ width: '12px', height: '12px' }} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <UserIcon style={{ width: '16px', height: '16px' }} />
                    {article.author.name}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <ClockIcon style={{ width: '16px', height: '16px' }} />
                    {article.readingTime} min
                  </div>
                </div>

                <div>
                  <Link
                    to={`/artigos/${article.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#22d3ee',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      gap: '0.25rem',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#06b6d4';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#22d3ee';
                    }}
                  >
                    Ler artigo
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && articles.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
            }}
          >
            <p
              style={{
                color: '#94a3b8',
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
              }}
            >
              Nenhum artigo encontrado
            </p>
            <p
              style={{
                color: '#64748b',
                fontSize: '0.875rem',
              }}
            >
              Tente ajustar os filtros ou fazer uma nova busca
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
