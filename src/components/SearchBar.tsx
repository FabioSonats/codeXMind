import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SearchBar Component
 * Global search functionality with autocomplete
 */
export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<
    Array<{ id: string; title: string; type: string }>
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    // Mock search results
    const mockResults: Array<{
      id: string;
      title: string;
      type: string;
      slug: string;
    }> = [
      {
        id: '1',
        title: 'React Hooks Tutorial',
        type: 'article',
        slug: 'react-hooks-tutorial',
      },
      {
        id: '2',
        title: 'TypeScript Guide',
        type: 'library',
        slug: 'typescript-guide',
      },
      {
        id: '3',
        title: 'CSS Grid Layout Mastery',
        type: 'article',
        slug: 'css-grid-layout-mastery',
      },
      {
        id: '4',
        title: 'CSS Grid Layout',
        type: 'library',
        slug: 'css-grid-layout',
      },
      {
        id: '5',
        title: 'Python Data Science',
        type: 'article',
        slug: 'python-data-science',
      },
    ];

    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = mockResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/artigos?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const handleResultClick = (result: {
    id: string;
    title: string;
    type: string;
    slug: string;
  }) => {
    if (result.type === 'article') {
      navigate(`/artigos/${result.slug}`);
    } else {
      navigate(`/biblioteca?search=${encodeURIComponent(result.title)}`);
    }
    setIsOpen(false);
    setQuery('');
  };

  const searchContainerStyle = {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const searchInputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.5rem',
    color: 'white',
    outline: 'none',
  };

  const resultsStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '0.5rem',
    marginTop: '0.25rem',
    maxHeight: '300px',
    overflowY: 'auto' as const,
    zIndex: 50,
  };

  const resultItemStyle = {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    borderBottom: '1px solid #334155',
    color: 'white',
  };

  // const resultItemHoverStyle = {
  //     backgroundColor: '#334155',
  // };

  return (
    <div style={searchContainerStyle}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Buscar artigos, biblioteca...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          style={searchInputStyle}
        />
      </form>

      {isOpen && (results.length > 0 || loading) && (
        <div style={resultsStyle}>
          {loading ? (
            <div
              style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af' }}
            >
              Buscando...
            </div>
          ) : (
            results.map(result => (
              <div
                key={result.id}
                style={resultItemStyle}
                onClick={() => handleResultClick(result)}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#334155';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                  {result.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  {result.type === 'article' ? '📄 Artigo' : '📚 Biblioteca'}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
