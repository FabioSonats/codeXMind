import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeftIcon,
    ClockIcon,
    UserIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
import { ArticlesRepository } from '../services/ArticlesRepository';
import type { Article } from '../types';

/**
 * Python Category Page
 * Displays all Python articles
 */
export default function Python() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                setLoading(true);
                const articlesRepository = new ArticlesRepository();
                const response = await articlesRepository.getArticles(1, 100, {
                    type: 'article',
                    category: 'python'
                });
                setArticles(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar artigos');
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    const pageStyle = {
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        padding: '2rem 0',
    };

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const headerStyle = {
        marginBottom: '2rem',
    };

    const backButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#22d3ee',
        textDecoration: 'none',
        fontSize: '0.875rem',
        marginBottom: '1rem',
        transition: 'color 0.2s ease',
    };

    const categoryHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
    };

    const categoryIconStyle = {
        fontSize: '3rem',
    };

    const categoryTitleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        margin: 0,
    };

    const categoryDescriptionStyle = {
        color: '#94a3b8',
        fontSize: '1.125rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
    };

    const articlesCountStyle = {
        color: '#22d3ee',
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '2rem',
    };

    const articlesListStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
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

    const articleTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
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
        gap: '1.5rem',
        fontSize: '0.75rem',
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

    const noArticlesStyle = {
        textAlign: 'center' as const,
        color: '#94a3b8',
        fontSize: '1.125rem',
        padding: '4rem 0',
    };

    if (loading) {
        return (
            <div style={pageStyle}>
                <div style={containerStyle}>
                    <div style={loadingStyle}>Carregando artigos de Python...</div>
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
                    <Link
                        to="/artigos"
                        style={backButtonStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#06b6d4';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#22d3ee';
                        }}
                    >
                        <ArrowLeftIcon style={{ width: '16px', height: '16px' }} />
                        Voltar para Artigos
                    </Link>

                    <div style={categoryHeaderStyle}>
                        <span style={categoryIconStyle}>🐍</span>
                        <h1 style={categoryTitleStyle}>Python</h1>
                    </div>

                    <p style={categoryDescriptionStyle}>
                        Python para desenvolvimento e ciência de dados. Aprenda desde o básico até técnicas avançadas.
                    </p>

                    <div style={articlesCountStyle}>
                        {articles.length} {articles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                    </div>
                </div>

                {/* Articles List */}
                {articles.length > 0 ? (
                    <div style={articlesListStyle}>
                        {articles.map((article) => (
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
                                <h3 style={articleTitleStyle}>{article.title}</h3>
                                <p style={articleExcerptStyle}>{article.excerpt}</p>

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
                    <div style={noArticlesStyle}>
                        <p>Nenhum artigo encontrado nesta categoria.</p>
                        <p>Volte para a <Link to="/artigos" style={{ color: '#22d3ee' }}>página de artigos</Link> para explorar outras categorias.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
