import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesRepository } from '../services/CategoriesRepository';
import type { Category } from '../types';

/**
 * Categories Page Component
 * Displays all article categories
 */
export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const categoriesRepository = new CategoriesRepository();
                const categoriesData = await categoriesRepository.getCategories();
                setCategories(categoriesData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar categorias');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

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

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
    };

    const categoryCardStyle = {
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #334155',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        display: 'block',
    };

    const categoryCardHoverStyle = {
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        borderColor: '#22d3ee',
    };

    const iconStyle = {
        fontSize: '3rem',
        marginBottom: '1rem',
        display: 'block',
    };

    const categoryTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: 'white',
    };

    const categoryDescriptionStyle = {
        color: '#94a3b8',
        marginBottom: '1rem',
        lineHeight: '1.6',
    };

    const articleCountStyle = {
        color: '#22d3ee',
        fontSize: '0.875rem',
        fontWeight: '500',
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
                    <div style={loadingStyle}>Carregando categorias...</div>
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
                    <h1 style={titleStyle}>Categorias</h1>
                    <p style={subtitleStyle}>
                        Explore nossos artigos organizados por categoria. Encontre conteúdo específico sobre suas tecnologias favoritas.
                    </p>
                </div>

                {/* Categories Grid */}
                <div style={gridStyle}>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/artigos?category=${category.slug}`}
                            style={categoryCardStyle}
                            onMouseEnter={(e) => {
                                Object.assign(e.currentTarget.style, categoryCardHoverStyle);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#334155';
                            }}
                        >
                            <span style={iconStyle}>{category.icon}</span>
                            <h3 style={categoryTitleStyle}>{category.name}</h3>
                            <p style={categoryDescriptionStyle}>{category.description}</p>
                            <div style={articleCountStyle}>
                                {category.articleCount} {category.articleCount === 1 ? 'artigo' : 'artigos'}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
