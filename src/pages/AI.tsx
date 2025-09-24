import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * AI Page Component
 * AI playground and resources
 */
export default function AI() {
    const [selectedTool, setSelectedTool] = useState<string | null>(null);

    const aiTools = [
        {
            id: 'code-generator',
            title: 'Gerador de Código',
            description: 'Gere código em várias linguagens com base em descrições em linguagem natural',
            icon: '🤖',
            features: ['Múltiplas linguagens', 'Sintaxe correta', 'Comentários explicativos'],
        },
        {
            id: 'code-reviewer',
            title: 'Revisor de Código',
            description: 'Analise seu código e receba sugestões de melhoria e boas práticas',
            icon: '🔍',
            features: ['Análise de qualidade', 'Sugestões de otimização', 'Detecção de bugs'],
        },
        {
            id: 'documentation',
            title: 'Gerador de Documentação',
            description: 'Crie documentação automática para suas funções e classes',
            icon: '📝',
            features: ['JSDoc automático', 'Exemplos de uso', 'Documentação de API'],
        },
        {
            id: 'test-generator',
            title: 'Gerador de Testes',
            description: 'Gere testes unitários e de integração para seu código',
            icon: '🧪',
            features: ['Testes unitários', 'Mocks automáticos', 'Cobertura de código'],
        },
    ];

    const aiArticles = [
        {
            id: '1',
            title: 'Introdução ao Machine Learning com Python',
            slug: 'introducao-machine-learning-python',
            excerpt: 'Aprenda os conceitos básicos de machine learning usando Python e scikit-learn.',
            tags: ['Python', 'Machine Learning', 'AI'],
            readingTime: 15,
        },
        {
            id: '2',
            title: 'ChatGPT para Desenvolvedores',
            slug: 'chatgpt-para-desenvolvedores',
            excerpt: 'Como usar ChatGPT e outras ferramentas de IA para acelerar o desenvolvimento.',
            tags: ['ChatGPT', 'IA', 'Produtividade'],
            readingTime: 10,
        },
        {
            id: '3',
            title: 'Automação com IA: Casos de Uso Reais',
            slug: 'automacao-ia-casos-uso',
            excerpt: 'Exemplos práticos de como implementar automação usando inteligência artificial.',
            tags: ['Automação', 'IA', 'Casos de Uso'],
            readingTime: 12,
        },
    ];

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
        background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    const subtitleStyle = {
        fontSize: '1.125rem',
        color: '#cbd5e1',
        marginBottom: '2rem',
    };

    const sectionStyle = {
        marginBottom: '4rem',
    };

    const sectionTitleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1.5rem',
        textAlign: 'center' as const,
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    };

    const cardStyle = {
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #334155',
        textAlign: 'center' as const,
        transition: 'transform 0.2s, box-shadow 0.2s',
    };

    const cardIconStyle = {
        fontSize: '3rem',
        marginBottom: '1rem',
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

    const featuresStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const featureStyle = {
        color: '#9ca3af',
        fontSize: '0.875rem',
        marginBottom: '0.5rem',
    };

    const buttonStyle = {
        padding: '0.75rem 1.5rem',
        backgroundColor: '#06b6d4',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '1rem',
    };

    const articleCardStyle = {
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid #334155',
    };

    const articleTitleStyle = {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '0.5rem',
        textDecoration: 'none',
    };

    const articleExcerptStyle = {
        color: '#cbd5e1',
        marginBottom: '1rem',
        lineHeight: '1.6',
    };

    const articleMetaStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.875rem',
        color: '#9ca3af',
        marginBottom: '1rem',
    };

    const tagsStyle = {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '0.5rem',
    };

    const tagStyle = {
        backgroundColor: '#334155',
        color: '#cbd5e1',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        fontSize: '0.75rem',
    };

    const ctaStyle = {
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        padding: '3rem 2rem',
        borderRadius: '1rem',
        textAlign: 'center' as const,
        border: '1px solid #334155',
    };

    const ctaTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
    };

    const ctaDescriptionStyle = {
        color: '#cbd5e1',
        marginBottom: '2rem',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Inteligência Artificial</h1>
                <p style={subtitleStyle}>
                    Ferramentas, tutoriais e recursos sobre IA para desenvolvedores
                </p>
            </div>

            {/* AI Tools Section */}
            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Ferramentas de IA</h2>
                <div style={gridStyle}>
                    {aiTools.map((tool) => (
                        <div key={tool.id} style={cardStyle}>
                            <div style={cardIconStyle}>{tool.icon}</div>
                            <h3 style={cardTitleStyle}>{tool.title}</h3>
                            <p style={cardDescriptionStyle}>{tool.description}</p>
                            <ul style={featuresStyle}>
                                {tool.features.map((feature, index) => (
                                    <li key={index} style={featureStyle}>
                                        ✓ {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: selectedTool === tool.id ? '#22d3ee' : '#1e293b',
                                    color: selectedTool === tool.id ? '#0f172a' : 'white',
                                }}
                                onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
                            >
                                {selectedTool === tool.id ? 'Selecionado' : 'Experimentar'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* AI Articles Section */}
            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Artigos sobre IA</h2>
                <div style={gridStyle}>
                    {aiArticles.map((article) => (
                        <div key={article.id} style={articleCardStyle}>
                            <Link to={`/artigos/${article.slug}`} style={articleTitleStyle}>
                                {article.title}
                            </Link>
                            <p style={articleExcerptStyle}>{article.excerpt}</p>
                            <div style={articleMetaStyle}>
                                <span>📖 {article.readingTime} min</span>
                            </div>
                            <div style={tagsStyle}>
                                {article.tags.map((tag) => (
                                    <span key={tag} style={tagStyle}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section style={ctaStyle}>
                <h2 style={ctaTitleStyle}>Pronto para explorar IA?</h2>
                <p style={ctaDescriptionStyle}>
                    Descubra como a inteligência artificial pode acelerar seu desenvolvimento
                    e abrir novas possibilidades para seus projetos.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/artigos?tag=ia" style={buttonStyle}>
                        Ver Artigos de IA
                    </Link>
                    <Link to="/biblioteca?type=ai" style={{
                        ...buttonStyle,
                        backgroundColor: 'transparent',
                        color: '#22d3ee',
                        border: '2px solid #22d3ee',
                    }}>
                        Recursos de IA
                    </Link>
                </div>
            </section>
        </div>
    );
}