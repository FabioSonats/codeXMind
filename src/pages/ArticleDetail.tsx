import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * Article Detail Page Component
 * Individual article view with content and metadata
 */
export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<{
    id: string;
    title: string;
    slug: string;
    content: string;
    author: { name: string };
    publishedAt: string;
    readingTime: number;
    tags: string[];
  } | null>(null);
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
    'css-grid-layout-mastery': {
      id: '3',
      title: 'CSS Grid Layout Mastery',
      slug: 'css-grid-layout-mastery',
      content: `# CSS Grid Layout Mastery

O CSS Grid é uma das ferramentas mais poderosas para criar layouts modernos e responsivos. Ele permite criar layouts bidimensionais complexos com facilidade, oferecendo controle total sobre a posição e o tamanho dos elementos.

## O que é CSS Grid?

CSS Grid é um sistema de layout bidimensional que permite criar layouts complexos usando linhas e colunas. Diferente do Flexbox, que é unidimensional, o Grid permite controlar tanto a direção horizontal quanto vertical dos elementos.

## Configuração Básica

Para começar a usar CSS Grid, você precisa definir um container como grid:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}
\`\`\`

### Propriedades Principais

- **grid-template-columns**: Define o número e tamanho das colunas
- **grid-template-rows**: Define o número e tamanho das linhas
- **gap**: Define o espaçamento entre os itens
- **grid-template-areas**: Permite nomear áreas do grid

## Unidades de Medida

### fr (Fractional Unit)
A unidade \`fr\` representa uma fração do espaço disponível:

\`\`\`css
.grid {
  grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
}
\`\`\`

### repeat()
A função \`repeat()\` simplifica a criação de grids repetitivos:

\`\`\`css
.grid {
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsivo */
}
\`\`\`

## Posicionamento de Itens

### Grid Lines
Você pode posicionar itens usando as linhas do grid:

\`\`\`css
.item {
  grid-column: 1 / 3; /* Da linha 1 à linha 3 */
  grid-row: 2 / 4;    /* Da linha 2 à linha 4 */
}
\`\`\`

### Grid Areas
Uma forma mais semântica de posicionar elementos:

\`\`\`css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Layouts Responsivos

### Auto-fit e Auto-fill
Crie layouts que se adaptam automaticamente:

\`\`\`css
.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Media Queries
Combine Grid com media queries para diferentes breakpoints:

\`\`\`css
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Exemplos Práticos

### Layout de Blog
\`\`\`css
.blog-layout {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";
  grid-template-rows: auto auto 1fr auto auto;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .blog-layout {
    grid-template-areas:
      "header header"
      "nav nav"
      "main sidebar"
      "footer footer";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto 1fr auto;
  }
}
\`\`\`

### Galeria de Imagens
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
\`\`\`

### Dashboard
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { 
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
\`\`\`

## Alinhamento

### justify-items e align-items
Controle o alinhamento dos itens dentro de suas células:

\`\`\`css
.grid {
  justify-items: center; /* Alinhamento horizontal */
  align-items: center;   /* Alinhamento vertical */
}
\`\`\`

### justify-content e align-content
Controle o alinhamento do grid como um todo:

\`\`\`css
.grid {
  justify-content: space-between;
  align-content: center;
}
\`\`\`

## Dicas e Boas Práticas

1. **Use Grid para layouts principais**: Grid é ideal para estruturas de página
2. **Combine com Flexbox**: Use Flexbox para componentes internos
3. **Nomes semânticos**: Use \`grid-template-areas\` para layouts mais legíveis
4. **Teste responsividade**: Sempre teste em diferentes tamanhos de tela
5. **Fallbacks**: Forneça fallbacks para navegadores mais antigos

## Conclusão

CSS Grid revolucionou a forma como criamos layouts web. Com sua flexibilidade e poder, você pode criar designs complexos e responsivos de forma mais eficiente. Pratique com os exemplos fornecidos e experimente diferentes combinações para dominar essa ferramenta essencial do desenvolvimento web moderno.`,
      author: 'Fábio Ferreira',
      publishedAt: '2024-01-05T09:15:00Z',
      updatedAt: '2024-01-05T09:15:00Z',
      tags: ['CSS', 'Layout', 'Grid'],
      readingTime: 10,
      featured: true,
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
          <Link to='/artigos' style={backButtonStyle}>
            ← Voltar para artigos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Link to='/artigos' style={backButtonStyle}>
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
            return (
              <h1
                key={index}
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: '2rem 0 1rem',
                }}
              >
                {line.slice(2)}
              </h1>
            );
          } else if (line.startsWith('## ')) {
            return (
              <h2
                key={index}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: '1.5rem 0 0.75rem',
                }}
              >
                {line.slice(3)}
              </h2>
            );
          } else if (line.startsWith('### ')) {
            return (
              <h3
                key={index}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: '1.25rem 0 0.5rem',
                }}
              >
                {line.slice(4)}
              </h3>
            );
          } else if (line.startsWith('```')) {
            return null; // Skip code block markers
          } else if (line.trim() === '') {
            return <br key={index} />;
          } else {
            return (
              <p key={index} style={{ marginBottom: '1rem' }}>
                {line}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}
