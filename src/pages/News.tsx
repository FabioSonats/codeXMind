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
 * News Page Component
 * Displays news articles with search, filter, and sorting capabilities
 */
export default function News() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'readingTime'>('recent');

    useEffect(() => {
        const loadArticles = async () => {
            try {
                setLoading(true);
                const articlesRepository = new ArticlesRepository();

                // Get only news articles
                const response = await articlesRepository.getArticles({
                    category: 'noticias',
                    page: 1,
                    limit: 50
                });

                setArticles(response.data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar notícias');
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    // Filter articles based on search and filters
    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = !selectedTag || article.tags.includes(selectedTag);
        const matchesLanguage = !selectedLanguage || article.language === selectedLanguage;

        return matchesSearch && matchesTag && matchesLanguage;
    });

    // Sort articles
    const sortedArticles = [...filteredArticles].sort((a, b) => {
        switch (sortBy) {
            case 'popular':
                return (b.views || 0) - (a.views || 0);
            case 'recent':
                return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
            case 'readingTime':
                return a.readingTime - b.readingTime;
            default:
                return 0;
        }
    });

    // Extract unique tags and languages
    const allTags = [...new Set(articles.flatMap(article => article.tags))];
    const allLanguages = [...new Set(articles.map(article => article.language))];

    // Styles
    const pageStyle = {
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        padding: '2rem 0',
    };

    const containerStyle = {
        maxWidth: '80rem',
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
        background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
    };

    const subtitleStyle = {
        fontSize: '1.25rem',
        color: '#94a3b8',
        maxWidth: '600px',
        margin: '0 auto',
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
        padding: '0.75rem 1rem',
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '0.5rem',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    };

    const searchIconStyle = {
        position: 'absolute' as const,
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#64748b',
        width: '20px',
        height: '20px',
    };

    const filterButtonStyle = {
        padding: '0.75rem 1rem',
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '0.5rem',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
    };

    const activeFilterButtonStyle = {
        ...filterButtonStyle,
        backgroundColor: '#06b6d4',
        borderColor: '#06b6d4',
    };

    const clearFiltersStyle = {
        ...filterButtonStyle,
        backgroundColor: '#ef4444',
        borderColor: '#ef4444',
    };

    const filtersContainerStyle = {
        display: showFilters ? 'block' : 'none',
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '0.5rem',
        padding: '1rem',
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
        fontSize: '0.875rem',
        color: '#cbd5e1',
        fontWeight: '500',
    };

    const filterSelectStyle = {
        padding: '0.5rem',
        backgroundColor: '#334155',
        border: '1px solid #475569',
        borderRadius: '0.375rem',
        color: 'white',
        fontSize: '0.875rem',
    };

    const sortContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap' as const,
    };

    const sortButtonStyle = {
        padding: '0.5rem 1rem',
        backgroundColor: '#334155',
        border: '1px solid #475569',
        borderRadius: '0.375rem',
        color: 'white',
        cursor: 'pointer',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
    };

    const activeSortButtonStyle = {
        ...sortButtonStyle,
        backgroundColor: '#06b6d4',
        borderColor: '#06b6d4',
    };

    const articlesGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
    };

    const articleCardStyle = {
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const articleTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '0.75rem',
        lineHeight: '1.4',
    };

    const articleExcerptStyle = {
        color: '#94a3b8',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        marginBottom: '1rem',
    };

    const articleMetaStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.75rem',
        color: '#64748b',
        flexWrap: 'wrap' as const,
    };

    const metaItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
    };

    const featuredBadgeStyle = {
        backgroundColor: '#f59e0b',
        color: '#1f2937',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.375rem',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        marginBottom: '0.75rem',
        display: 'inline-block',
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

    if (loading) {
        return (
            <div style={pageStyle}>
                <div style={containerStyle}>
                    <div style={loadingStyle}>Carregando notícias...</div>
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
                    <h1 style={titleStyle}>Notícias Tech</h1>
                    <p style={subtitleStyle}>
                        As últimas novidades e tendências do mundo da tecnologia
                    </p>
                </div>

                {/* Search and Filters */}
                <div style={searchAndFiltersContainerStyle}>
                    <div style={searchAndFiltersRowStyle}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <input
                                type="text"
                                placeholder="Buscar notícias..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={searchInputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#06b6d4';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#334155';
                                }}
                            />
                            <MagnifyingGlassIcon style={searchIconStyle} />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            style={showFilters ? activeFilterButtonStyle : filterButtonStyle}
                            onMouseEnter={(e) => {
                                if (!showFilters) {
                                    e.currentTarget.style.backgroundColor = '#334155';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!showFilters) {
                                    e.currentTarget.style.backgroundColor = '#1e293b';
                                }
                            }}
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
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#dc2626';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ef4444';
                                }}
                            >
                                Limpar
                            </button>
                        )}
                    </div>

                    {/* Filters */}
                    <div style={filtersContainerStyle}>
                        <div style={filtersGridStyle}>
                            <div style={filterGroupStyle}>
                                <label style={filterLabelStyle}>Tag:</label>
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
                                <label style={filterLabelStyle}>Idioma:</label>
                                <select
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                    style={filterSelectStyle}
                                >
                                    <option value="">Todos os idiomas</option>
                                    {allLanguages.map(lang => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Sort Options */}
                    <div style={sortContainerStyle}>
                        <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>Ordenar por:</span>
                        <button
                            onClick={() => setSortBy('recent')}
                            style={sortBy === 'recent' ? activeSortButtonStyle : sortButtonStyle}
                            onMouseEnter={(e) => {
                                if (sortBy !== 'recent') {
                                    e.currentTarget.style.backgroundColor = '#475569';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (sortBy !== 'recent') {
                                    e.currentTarget.style.backgroundColor = '#334155';
                                }
                            }}
                        >
                            Mais recentes
                        </button>
                        <button
                            onClick={() => setSortBy('popular')}
                            style={sortBy === 'popular' ? activeSortButtonStyle : sortButtonStyle}
                            onMouseEnter={(e) => {
                                if (sortBy !== 'popular') {
                                    e.currentTarget.style.backgroundColor = '#475569';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (sortBy !== 'popular') {
                                    e.currentTarget.style.backgroundColor = '#334155';
                                }
                            }}
                        >
                            Mais populares
                        </button>
                        <button
                            onClick={() => setSortBy('readingTime')}
                            style={sortBy === 'readingTime' ? activeSortButtonStyle : sortButtonStyle}
                            onMouseEnter={(e) => {
                                if (sortBy !== 'readingTime') {
                                    e.currentTarget.style.backgroundColor = '#475569';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (sortBy !== 'readingTime') {
                                    e.currentTarget.style.backgroundColor = '#334155';
                                }
                            }}
                        >
                            Tempo de leitura
                        </button>
                    </div>
                </div>

                {/* Articles Grid */}
                <div style={articlesGridStyle}>
                    {sortedArticles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/artigo/${article.slug}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                style={articleCardStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.borderColor = '#06b6d4';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(6, 182, 212, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = '#334155';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {article.featured && (
                                    <div style={featuredBadgeStyle}>Destaque</div>
                                )}
                                <h3 style={articleTitleStyle}>{article.title}</h3>
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
                                    <div style={metaItemStyle}>
                                        <EyeIcon style={{ width: '14px', height: '14px' }} />
                                        {article.views || 0} visualizações
                                    </div>
                                    <div style={metaItemStyle}>
                                        <TagIcon style={{ width: '14px', height: '14px' }} />
                                        {article.tags.slice(0, 2).join(', ')}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {sortedArticles.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#94a3b8', padding: '4rem 0' }}>
                        Nenhuma notícia encontrada com os filtros aplicados.
                    </div>
                )}
            </div>
        </div>
    );
}
