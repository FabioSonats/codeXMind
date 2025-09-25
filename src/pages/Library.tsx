import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Library Page Component
 * Resource collection with filters and download/preview
 */
export default function Library() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState<
    Array<{
      id: string;
      title: string;
      type: string;
      description: string;
      downloadUrl: string;
      previewUrl?: string;
      tags: string[];
      language: string;
      level: string;
      size: string;
      format: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get('type') || 'all'
  );
  const [selectedLevel, setSelectedLevel] = useState(
    searchParams.get('level') || 'all'
  );

  // Mock library items data
  const getMockItems = () => [
    {
      id: '1',
      title: 'React Cheat Sheet',
      description: 'Guia rápido de referência para React',
      type: 'cheatsheet',
      language: 'pt',
      tags: ['React', 'JavaScript', 'Reference'],
      level: 'intermediate',
      downloadUrl: '/downloads/react-cheatsheet.pdf',
      previewUrl: '/preview/react-cheatsheet',
      fileSize: '2.5 MB',
      format: 'PDF',
      featured: true,
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      title: 'TypeScript Handbook',
      description: 'Manual completo do TypeScript',
      type: 'ebook',
      language: 'pt',
      tags: ['TypeScript', 'JavaScript', 'Handbook'],
      level: 'beginner',
      downloadUrl: '/downloads/typescript-handbook.pdf',
      previewUrl: '/preview/typescript-handbook',
      fileSize: '5.2 MB',
      format: 'PDF',
      featured: false,
      createdAt: '2024-01-10T14:30:00Z',
    },
    {
      id: '3',
      title: 'CSS Grid Snippets',
      description: 'Códigos úteis para layouts com CSS Grid',
      type: 'snippets',
      language: 'pt',
      tags: ['CSS', 'Grid', 'Layout', 'Snippets'],
      level: 'intermediate',
      downloadUrl: '/downloads/css-grid-snippets.zip',
      previewUrl: '/preview/css-grid-snippets',
      fileSize: '1.2 MB',
      format: 'ZIP',
      featured: true,
      createdAt: '2024-01-05T09:15:00Z',
    },
    {
      id: '4',
      title: 'CSS Grid Guide',
      description: 'Guia completo de CSS Grid Layout',
      type: 'ebook',
      language: 'pt',
      tags: ['CSS', 'Layout', 'Grid'],
      level: 'intermediate',
      downloadUrl: '/downloads/css-grid-guide.pdf',
      previewUrl: '/preview/css-grid-guide',
      fileSize: '3.1 MB',
      format: 'PDF',
      featured: false,
      createdAt: '2024-01-01T16:45:00Z',
    },
    {
      id: '5',
      title: 'Python Data Science Toolkit',
      description: 'Ferramentas essenciais para Data Science com Python',
      type: 'cheatsheet',
      language: 'pt',
      tags: ['Python', 'Data Science', 'Analytics'],
      level: 'advanced',
      downloadUrl: '/downloads/python-datascience-toolkit.pdf',
      previewUrl: '/preview/python-datascience-toolkit',
      fileSize: '4.7 MB',
      format: 'PDF',
      featured: true,
      createdAt: '2023-12-28T11:20:00Z',
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mockItems = getMockItems();
      let filteredItems = mockItems;

      // Filter by search query
      if (searchQuery) {
        filteredItems = filteredItems.filter(
          item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            item.tags.some((tag: string) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
      }

      // Filter by type
      if (selectedType !== 'all') {
        filteredItems = filteredItems.filter(
          item => item.type === selectedType
        );
      }

      // Filter by level
      if (selectedLevel !== 'all') {
        filteredItems = filteredItems.filter(
          item => item.level === selectedLevel
        );
      }

      setItems(filteredItems);
      setLoading(false);
    }, 500);
  }, [searchQuery, selectedType, selectedLevel]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedType !== 'all') params.set('type', selectedType);
    if (selectedLevel !== 'all') params.set('level', selectedLevel);
    setSearchParams(params);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cheatsheet':
        return '📋';
      case 'ebook':
        return '📚';
      case 'snippets':
        return '💻';
      default:
        return '📄';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return '#22c55e';
      case 'intermediate':
        return '#f59e0b';
      case 'advanced':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#cbd5e1',
    marginBottom: '2rem',
  };

  const filtersStyle = {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    marginBottom: '2rem',
    border: '1px solid #334155',
  };

  const filterRowStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap' as const,
  };

  const filterGroupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
    minWidth: '150px',
  };

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#cbd5e1',
  };

  const selectStyle = {
    padding: '0.5rem',
    backgroundColor: '#334155',
    border: '1px solid #475569',
    borderRadius: '0.375rem',
    color: 'white',
    fontSize: '0.875rem',
  };

  const inputStyle = {
    padding: '0.5rem',
    backgroundColor: '#334155',
    border: '1px solid #475569',
    borderRadius: '0.375rem',
    color: 'white',
    fontSize: '0.875rem',
    flex: 1,
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#06b6d4',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    alignSelf: 'flex-end',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #334155',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
  };

  const featuredBadgeStyle = {
    backgroundColor: '#22d3ee',
    color: '#0f172a',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    fontWeight: '600',
  };

  const descriptionStyle = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1rem',
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    color: '#9ca3af',
  };

  const tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const tagStyle = {
    backgroundColor: '#334155',
    color: '#cbd5e1',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
  };

  const actionsStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  const actionButtonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
  };

  const downloadButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#06b6d4',
    color: 'white',
  };

  const previewButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: 'transparent',
    color: '#22d3ee',
    border: '1px solid #22d3ee',
  };

  const loadingStyle = {
    textAlign: 'center' as const,
    padding: '3rem',
    color: '#9ca3af',
  };

  const emptyStyle = {
    textAlign: 'center' as const,
    padding: '3rem',
    color: '#9ca3af',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Biblioteca</h1>
        <p style={subtitleStyle}>
          Ebooks, cheatsheets e snippets organizados por linguagem e nível
        </p>
      </div>

      {/* Filters */}
      <div style={filtersStyle}>
        <form onSubmit={handleSearch}>
          <div style={filterRowStyle}>
            <div style={filterGroupStyle}>
              <label style={labelStyle}>Buscar</label>
              <input
                type='text'
                placeholder='Buscar recursos...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={filterGroupStyle}>
              <label style={labelStyle}>Tipo</label>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                style={selectStyle}
              >
                <option value='all'>Todos</option>
                <option value='cheatsheet'>Cheatsheets</option>
                <option value='ebook'>Ebooks</option>
                <option value='snippets'>Snippets</option>
              </select>
            </div>

            <div style={filterGroupStyle}>
              <label style={labelStyle}>Nível</label>
              <select
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
                style={selectStyle}
              >
                <option value='all'>Todos</option>
                <option value='beginner'>Iniciante</option>
                <option value='intermediate'>Intermediário</option>
                <option value='advanced'>Avançado</option>
              </select>
            </div>

            <button type='submit' style={buttonStyle}>
              Filtrar
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <div style={loadingStyle}>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⏳</div>
          <p>Carregando recursos...</p>
        </div>
      ) : items.length === 0 ? (
        <div style={emptyStyle}>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📚</div>
          <p>Nenhum recurso encontrado.</p>
          <p>Tente ajustar os filtros ou fazer uma nova busca.</p>
        </div>
      ) : (
        <div style={gridStyle}>
          {items.map(item => (
            <div key={item.id} style={cardStyle}>
              <div style={cardHeaderStyle}>
                <div>
                  <h3 style={cardTitleStyle}>
                    {getTypeIcon(item.type)} {item.title}
                  </h3>
                </div>
                {item.featured && (
                  <span style={featuredBadgeStyle}>⭐ Destaque</span>
                )}
              </div>

              <p style={descriptionStyle}>{item.description}</p>

              <div style={metaStyle}>
                <span style={{ color: getLevelColor(item.level) }}>
                  {item.level === 'beginner'
                    ? '🟢 Iniciante'
                    : item.level === 'intermediate'
                      ? '🟡 Intermediário'
                      : '🔴 Avançado'}
                </span>
                <span>
                  {item.fileSize} • {item.format}
                </span>
              </div>

              <div style={tagsStyle}>
                {item.tags.map((tag: string) => (
                  <span key={tag} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={actionsStyle}>
                <a href={item.downloadUrl} style={downloadButtonStyle}>
                  📥 Download
                </a>
                <a href={item.previewUrl} style={previewButtonStyle}>
                  👁️ Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
