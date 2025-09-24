import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * Article Detail Page Component
 * Individual article view with content and metadata
 */
export default function ArticleDetail() {
    const { slug } = useParams();
    const [article, setArticle] = useState<{id: string; title: string; slug: string; content: string; author: {name: string}; publishedAt: string; readingTime: number; tags: string[]} | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Mock article data
    const getMockArticles = () => ({
        'react-hooks-guia-completo': {
            id: '1',
            title: 'React Hooks: Guia Completo',
            slug: 'react-hooks-guia-completo',
            content: `# React Hooks: Guia Completo

Os React Hooks revolucionaram o desenvolvimento com React, permitindo usar estado e outros recursos do React em componentes funcionais.

## useState

O hook mais básico para gerenciar estado:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
\`\`\`

## useEffect

Para efeitos colaterais:

\`\`\`jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Você clicou \${count} vezes\`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

Criando seus próprios hooks:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

## Conclusão

Os React Hooks tornam o código mais limpo e reutilizável. Use-os para gerenciar estado e efeitos colaterais em seus componentes funcionais.`,
            author: 'P. Sonats',
            publishedAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-01-15T10:00:00Z',
            tags: ['React', 'JavaScript', 'Hooks'],
            readingTime: 8,
            featured: true,
        },
        'typescript-para-iniciantes': {
            id: '2',
            title: 'TypeScript para Iniciantes',
            slug: 'typescript-para-iniciantes',
            content: `# TypeScript para Iniciantes

TypeScript é um superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro e manutenível.

## Configuração

Instale o TypeScript:

\`\`\`bash
npm install -g typescript
\`\`\`

Crie um arquivo de configuração:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
\`\`\`

## Tipos Básicos

\`\`\`typescript
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["leitura", "música"];
\`\`\`

## Interfaces

\`\`\`typescript
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // opcional
}

const pessoa: Pessoa = {
  nome: "Maria",
  idade: 30
};
\`\`\`

## Conclusão

TypeScript oferece uma base sólida para desenvolvimento JavaScript em larga escala.`,
            author: 'P. Sonats',
            publishedAt: '2024-01-10T14:30:00Z',
            updatedAt: '2024-01-10T14:30:00Z',
            tags: ['TypeScript', 'JavaScript', 'Tutorial'],
            readingTime: 12,
            featured: false,
        },
    });

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const mockArticles = getMockArticles();
            if (slug && mockArticles[slug]) {
                setArticle(mockArticles[slug]);
                setError(null);
            } else {
                setError('Artigo não encontrado');
            }
            setLoading(false);
        }, 500);
    }, [slug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const containerStyle = {
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '2rem 1rem',
    };

    const headerStyle = {
        marginBottom: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid #334155',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
        lineHeight: '1.2',
    };

    const metaStyle = {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '1rem',
        marginBottom: '1rem',
        fontSize: '0.875rem',
        color: '#9ca3af',
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

    const contentStyle = {
        color: '#cbd5e1',
        lineHeight: '1.7',
        fontSize: '1.125rem',
    };

    const loadingStyle = {
        textAlign: 'center' as const,
        padding: '3rem',
        color: '#9ca3af',
    };

    const errorStyle = {
        textAlign: 'center' as const,
        padding: '3rem',
        color: '#ef4444',
    };

    const backButtonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#22d3ee',
        textDecoration: 'none',
        marginBottom: '2rem',
        fontSize: '0.875rem',
    };

    if (loading) {
        return (
            <div style={containerStyle}>
                <div style={loadingStyle}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⏳</div>
                    <p>Carregando artigo...</p>
                </div>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div style={containerStyle}>
                <div style={errorStyle}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>❌</div>
                    <p>{error || 'Artigo não encontrado'}</p>
                    <Link to="/artigos" style={backButtonStyle}>
                        ← Voltar para artigos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <Link to="/artigos" style={backButtonStyle}>
                ← Voltar para artigos
            </Link>

            <header style={headerStyle}>
                <h1 style={titleStyle}>{article.title}</h1>

                <div style={metaStyle}>
                    <span>Por {article.author}</span>
                    <span>📅 {formatDate(article.publishedAt)}</span>
                    <span>📖 {article.readingTime} min de leitura</span>
                </div>

                <div style={tagsStyle}>
                    {article.tags.map((tag: string) => (
                        <span key={tag} style={tagStyle}>
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div style={contentStyle}>
                {article.content.split('\n').map((line: string, index: number) => {
                    if (line.startsWith('# ')) {
                        return <h1 key={index} style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', margin: '2rem 0 1rem' }}>{line.slice(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                        return <h2 key={index} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: '1.5rem 0 0.75rem' }}>{line.slice(3)}</h2>;
                    } else if (line.startsWith('### ')) {
                        return <h3 key={index} style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', margin: '1.25rem 0 0.5rem' }}>{line.slice(4)}</h3>;
                    } else if (line.startsWith('```')) {
                        return null; // Skip code block markers
                    } else if (line.trim() === '') {
                        return <br key={index} />;
                    } else {
                        return <p key={index} style={{ marginBottom: '1rem' }}>{line}</p>;
                    }
                })}
            </div>
        </div>
    );
}