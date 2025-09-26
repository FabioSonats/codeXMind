import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArticlesRepository } from '../services/ArticlesRepository';
import type { Article } from '../types';

/**
 * Article Detail Page Component
 * Individual article view with content and metadata
 */
export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;

      try {
        setLoading(true);

        // Get article from repository
        const articlesRepository = new ArticlesRepository();
        const articleData = await articlesRepository.getArticleBySlug(slug);

        if (!articleData) {
          setError('Artigo não encontrado');
          return;
        }

        setArticle(articleData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar artigo');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  // Styles
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

  const backButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#22d3ee',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginBottom: '2rem',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  };

  const headerStyle = {
    marginBottom: '2rem',
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
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.875rem',
    color: '#94a3b8',
    marginBottom: '2rem',
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

  const contentStyle = {
    color: '#e2e8f0',
    lineHeight: '1.7',
    fontSize: '1rem',
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
          <div style={loadingStyle}>Carregando artigo...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={errorStyle}>Erro: {error}</div>
          <button
            onClick={() => navigate(-1)}
            style={backButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#06b6d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#22d3ee';
            }}
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={errorStyle}>Artigo não encontrado</div>
          <button
            onClick={() => navigate(-1)}
            style={backButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#06b6d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#22d3ee';
            }}
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={backButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#06b6d4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#22d3ee';
          }}
        >
          ← Voltar
        </button>

        {/* Article Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>{article.title}</h1>

          <div style={metaStyle}>
            <div style={metaItemStyle}>
              <span>📖</span>
              {article.readingTime} min de leitura
            </div>
            <div style={metaItemStyle}>
              <span>👤</span>
              {article.author.name}
            </div>
            <div style={metaItemStyle}>
              <span>📅</span>
              {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
            </div>
            <div style={metaItemStyle}>
              <span>🏷️</span>
              <div style={tagsStyle}>
                {article.tags.map((tag, index) => (
                  <span key={index} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div style={contentStyle}>
          {article.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return (
                <h1 key={index} style={{ fontSize: '2rem', fontWeight: 'bold', margin: '2rem 0 1rem 0', color: 'white' }}>
                  {line.substring(2)}
                </h1>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={index} style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1.5rem 0 1rem 0', color: 'white' }}>
                  {line.substring(3)}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={index} style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '1.25rem 0 0.75rem 0', color: 'white' }}>
                  {line.substring(4)}
                </h3>
              );
            }
            if (line.startsWith('```')) {
              return null; // Skip code block markers
            }
            if (line.trim() === '') {
              return <br key={index} />;
            }
            if (line.startsWith('- ') || line.startsWith('* ')) {
              return (
                <div key={index} style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
                  • {line.substring(2)}
                </div>
              );
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return (
                <strong key={index} style={{ fontWeight: 'bold', color: 'white' }}>
                  {line.substring(2, line.length - 2)}
                </strong>
              );
            }
            return (
              <p key={index} style={{ margin: '1rem 0' }}>
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}