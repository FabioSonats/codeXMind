import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page Component
 * Custom 404 page with navigation options
 */
export default function NotFound() {
    const containerStyle = {
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '4rem 1rem',
        textAlign: 'center' as const,
    };

    const titleStyle = {
        fontSize: '6rem',
        fontWeight: 'bold',
        color: '#22d3ee',
        marginBottom: '1rem',
        lineHeight: '1',
    };

    const subtitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '1rem',
    };

    const descriptionStyle = {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        marginBottom: '3rem',
        lineHeight: '1.6',
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
    };

    const suggestionsStyle = {
        backgroundColor: '#1e293b',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid #334155',
        textAlign: 'left' as const,
    };

    const suggestionsTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '1rem',
        textAlign: 'center' as const,
    };

    const suggestionsListStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const suggestionItemStyle = {
        marginBottom: '0.75rem',
    };

    const suggestionLinkStyle = {
        color: '#22d3ee',
        textDecoration: 'none',
        fontSize: '0.875rem',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>404</h1>
            <h2 style={subtitleStyle}>Página não encontrada</h2>
            <p style={descriptionStyle}>
                Ops! A página que você está procurando não existe ou foi movida.
                Não se preocupe, vamos te ajudar a encontrar o que precisa.
            </p>

            <div style={buttonGroupStyle}>
                <Link to="/" style={primaryButtonStyle}>
                    🏠 Voltar ao Início
                </Link>
                <Link to="/artigos" style={secondaryButtonStyle}>
                    📚 Ver Artigos
                </Link>
            </div>

            <div style={suggestionsStyle}>
                <h3 style={suggestionsTitleStyle}>Páginas populares</h3>
                <ul style={suggestionsListStyle}>
                    <li style={suggestionItemStyle}>
                        <Link to="/artigos" style={suggestionLinkStyle}>
                            📄 Artigos - Tutoriais e guias técnicos
                        </Link>
                    </li>
                    <li style={suggestionItemStyle}>
                        <Link to="/biblioteca" style={suggestionLinkStyle}>
                            📚 Biblioteca - Ebooks e recursos
                        </Link>
                    </li>
                    <li style={suggestionItemStyle}>
                        <Link to="/ia" style={suggestionLinkStyle}>
                            🤖 IA - Recursos de inteligência artificial
                        </Link>
                    </li>
                    <li style={suggestionItemStyle}>
                        <Link to="/sobre" style={suggestionLinkStyle}>
                            ℹ️ Sobre - Conheça o CodeXMind
                        </Link>
                    </li>
                    <li style={suggestionItemStyle}>
                        <Link to="/contato" style={suggestionLinkStyle}>
                            📧 Contato - Entre em contato conosco
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}