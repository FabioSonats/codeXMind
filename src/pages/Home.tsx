import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Main landing page with hero section and featured content
 */
export default function Home() {
    const heroStyle = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        padding: '4rem 0',
        textAlign: 'center' as const,
    };

    const containerStyle = {
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const titleStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const subtitleStyle = {
        fontSize: '1.5rem',
        color: '#22d3ee',
        marginBottom: '1rem',
    };

    const descriptionStyle = {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        marginBottom: '2rem',
        maxWidth: '48rem',
        margin: '0 auto 2rem',
    };

    const buttonGroupStyle = {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap' as const,
        marginBottom: '3rem',
    };

    const primaryButtonStyle = {
        padding: '1rem 2rem',
        backgroundColor: '#06b6d4',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
    };

    const secondaryButtonStyle = {
        padding: '1rem 2rem',
        backgroundColor: 'transparent',
        color: '#22d3ee',
        textDecoration: 'none',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '1rem',
        border: '2px solid #22d3ee',
        cursor: 'pointer',
    };

    const featuresStyle = {
        padding: '4rem 0',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
    };

    const featuresTitleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center' as const,
        marginBottom: '1rem',
    };

    const featuresSubtitleStyle = {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        textAlign: 'center' as const,
        marginBottom: '3rem',
        maxWidth: '32rem',
        margin: '0 auto 3rem',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    };

    const cardStyle = {
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid #334155',
        textAlign: 'center' as const,
    };

    const cardIconStyle = {
        width: '3rem',
        height: '3rem',
        backgroundColor: '#06b6d4',
        borderRadius: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
        fontSize: '1.5rem',
    };

    const cardTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '1rem',
    };

    const cardDescriptionStyle = {
        color: '#cbd5e1',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    };

    const cardLinkStyle = {
        color: '#22d3ee',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const ctaStyle = {
        padding: '4rem 0',
        textAlign: 'center' as const,
    };

    const ctaTitleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1.5rem',
    };

    const ctaDescriptionStyle = {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        marginBottom: '2rem',
        maxWidth: '32rem',
        margin: '0 auto 2rem',
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={heroStyle}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>CodeXMind</h1>
                    <p style={subtitleStyle}>Aprenda tecnologia. Pratique com propósito.</p>
                    <p style={descriptionStyle}>
                        Artigos, guias e recursos sobre linguagens de programação e inteligência artificial.
                        Conteúdo curado para acelerar seu aprendizado.
                    </p>
                    <div style={buttonGroupStyle}>
                        <Link to="/artigos" style={primaryButtonStyle}>
                            Explorar Artigos →
                        </Link>
                        <Link to="/biblioteca" style={secondaryButtonStyle}>
                            📚 Biblioteca
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={featuresStyle}>
                <div style={containerStyle}>
                    <h2 style={featuresTitleStyle}>Recursos para Desenvolvedores</h2>
                    <p style={featuresSubtitleStyle}>
                        Conteúdo curado e atualizado para acelerar seu aprendizado
                    </p>
                    <div style={gridStyle}>
                        <div style={cardStyle}>
                            <div style={cardIconStyle}>💻</div>
                            <h3 style={cardTitleStyle}>Artigos Técnicos</h3>
                            <p style={cardDescriptionStyle}>
                                Tutoriais profundos sobre programação, frameworks e melhores práticas.
                                Conteúdo atualizado e prático.
                            </p>
                            <Link to="/artigos" style={cardLinkStyle}>
                                Ler artigos →
                            </Link>
                        </div>

                        <div style={cardStyle}>
                            <div style={cardIconStyle}>📚</div>
                            <h3 style={cardTitleStyle}>Biblioteca</h3>
                            <p style={cardDescriptionStyle}>
                                Ebooks, cheatsheets e snippets organizados por linguagem e nível.
                                Recursos para consulta rápida.
                            </p>
                            <Link to="/biblioteca" style={cardLinkStyle}>
                                Explorar biblioteca →
                            </Link>
                        </div>

                        <div style={cardStyle}>
                            <div style={cardIconStyle}>🤖</div>
                            <h3 style={cardTitleStyle}>Inteligência Artificial</h3>
                            <p style={cardDescriptionStyle}>
                                Recursos e tutoriais sobre IA, machine learning e automação.
                                Fique atualizado com as últimas tendências.
                            </p>
                            <Link to="/ia" style={cardLinkStyle}>
                                Descobrir IA →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={ctaStyle}>
                <div style={containerStyle}>
                    <h2 style={ctaTitleStyle}>Pronto para começar?</h2>
                    <p style={ctaDescriptionStyle}>
                        Junte-se à comunidade de desenvolvedores que estão transformando ideias em código.
                    </p>
                    <div style={buttonGroupStyle}>
                        <Link to="/artigos" style={primaryButtonStyle}>
                            Começar a aprender
                        </Link>
                        <Link to="/sobre" style={secondaryButtonStyle}>
                            Sobre o CodeXMind
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}