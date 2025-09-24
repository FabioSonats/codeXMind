import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Site footer with links, contact info, and credits
 */
export default function Footer() {
    const footerStyle = {
        backgroundColor: '#0f172a',
        borderTop: '1px solid #334155',
        padding: '3rem 0 2rem',
        marginTop: 'auto',
    };

    const containerStyle = {
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
    };

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    };

    const titleStyle = {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '0.5rem',
    };

    const linkStyle = {
        color: '#9ca3af',
        textDecoration: 'none',
        fontSize: '0.875rem',
    };

    // const linkHoverStyle = {
    //     color: '#22d3ee',
    // };

    const bottomStyle = {
        borderTop: '1px solid #334155',
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center' as const,
    };

    const socialStyle = {
        display: 'flex',
        gap: '1rem',
    };

    const socialLinkStyle = {
        width: '2.5rem',
        height: '2.5rem',
        backgroundColor: '#1e293b',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        textDecoration: 'none',
        fontSize: '1.25rem',
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={gridStyle}>
                    {/* Links Rápidos */}
                    <div style={sectionStyle}>
                        <h3 style={titleStyle}>Links Rápidos</h3>
                        <Link to="/artigos" style={linkStyle}>Artigos</Link>
                        <Link to="/biblioteca" style={linkStyle}>Biblioteca</Link>
                        <Link to="/ia" style={linkStyle}>IA</Link>
                        <Link to="/sobre" style={linkStyle}>Sobre</Link>
                        <Link to="/contato" style={linkStyle}>Contato</Link>
                    </div>

                    {/* Categorias */}
                    <div style={sectionStyle}>
                        <h3 style={titleStyle}>Categorias</h3>
                        <Link to="/artigos?tag=react" style={linkStyle}>React</Link>
                        <Link to="/artigos?tag=typescript" style={linkStyle}>TypeScript</Link>
                        <Link to="/artigos?tag=nodejs" style={linkStyle}>Node.js</Link>
                        <Link to="/artigos?tag=python" style={linkStyle}>Python</Link>
                        <Link to="/artigos?tag=css" style={linkStyle}>CSS</Link>
                    </div>

                    {/* Recursos */}
                    <div style={sectionStyle}>
                        <h3 style={titleStyle}>Recursos</h3>
                        <Link to="/biblioteca?type=cheatsheet" style={linkStyle}>Cheatsheets</Link>
                        <Link to="/biblioteca?type=ebook" style={linkStyle}>Ebooks</Link>
                        <Link to="/biblioteca?type=snippets" style={linkStyle}>Snippets</Link>
                        <Link to="/ia" style={linkStyle}>Ferramentas IA</Link>
                    </div>

                    {/* Contato */}
                    <div style={sectionStyle}>
                        <h3 style={titleStyle}>Contato</h3>
                        <a href="mailto:contato@codexmind.com" style={linkStyle}>
                            contato@codexmind.com
                        </a>
                        <a href="https://github.com/psonats" style={linkStyle} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/psonats" style={linkStyle} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={bottomStyle}>
                    {/* Social Links */}
                    <div style={socialStyle}>
                        <a href="https://github.com/psonats" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                            📱
                        </a>
                        <a href="https://linkedin.com/in/psonats" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                            💼
                        </a>
                        <a href="https://twitter.com/psonats" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                            🐦
                        </a>
                    </div>

                    {/* Copyright */}
                    <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        <p>© 2024 CodeXMind. Todos os direitos reservados.</p>
                        <p>
                            Criado por{' '}
                            <a
                                href="https://psonats.dev"
                                style={{ color: '#22d3ee', textDecoration: 'none' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                P. Sonats
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}