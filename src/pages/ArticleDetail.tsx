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
    'logica-programacao-python': {
      id: '4',
      title: 'Lógica de Programação com Python',
      slug: 'logica-programacao-python',
      content: `# Lógica de Programação com Python

A lógica de programação é a base fundamental para qualquer desenvolvedor. Python, com sua sintaxe clara e legível, é uma excelente linguagem para aprender esses conceitos essenciais.

## O que é Lógica de Programação?

Lógica de programação é o conjunto de regras e conceitos que permitem criar algoritmos eficientes e soluções para problemas computacionais. É o pensamento estruturado que transforma uma ideia em código executável.

## Variáveis e Tipos de Dados

### Declaração de Variáveis
Em Python, as variáveis são criadas automaticamente quando você atribui um valor:

\`\`\`python
# Variáveis básicas
nome = "João"
idade = 25
altura = 1.75
ativo = True

# Tipos de dados
print(type(nome))    # <class 'str'>
print(type(idade))   # <class 'int'>
print(type(altura))  # <class 'float'>
print(type(ativo))   # <class 'bool'>
\`\`\`

### Tipos de Dados Fundamentais
\`\`\`python
# String (texto)
texto = "Olá, mundo!"
texto_multilinha = """
Este é um texto
que ocupa várias linhas
"""

# Números inteiros
numero_inteiro = 42
numero_negativo = -10

# Números decimais
preco = 19.99
pi = 3.14159

# Booleanos
verdadeiro = True
falso = False

# Listas
frutas = ["maçã", "banana", "laranja"]
numeros = [1, 2, 3, 4, 5]

# Dicionários
pessoa = {
    "nome": "Maria",
    "idade": 30,
    "cidade": "São Paulo"
}
\`\`\`

## Estruturas de Controle

### Condicionais (if, elif, else)
\`\`\`python
# Estrutura básica
idade = 18

if idade >= 18:
    print("Maior de idade")
elif idade >= 16:
    print("Pode votar")
else:
    print("Menor de idade")

# Operadores lógicos
nota = 8.5
frequencia = 85

if nota >= 7 and frequencia >= 75:
    print("Aprovado")
elif nota >= 5 or frequencia >= 90:
    print("Recuperação")
else:
    print("Reprovado")
\`\`\`

### Loops (for e while)
\`\`\`python
# Loop for - iterando sobre uma lista
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(f"Fruta: {fruta}")

# Loop for com range
for i in range(5):
    print(f"Número: {i}")

# Loop while
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# Loop com break e continue
for numero in range(10):
    if numero == 3:
        continue  # Pula o número 3
    if numero == 7:
        break     # Para no número 7
    print(numero)
\`\`\`

## Funções

### Criando Funções
\`\`\`python
# Função simples
def saudacao():
    print("Olá, mundo!")

# Função com parâmetros
def saudacao_personalizada(nome):
    return f"Olá, {nome}!"

# Função com múltiplos parâmetros
def calcular_area(comprimento, largura):
    area = comprimento * largura
    return area

# Função com parâmetros opcionais
def apresentar(nome, idade=None):
    if idade:
        return f"Meu nome é {nome} e tenho {idade} anos"
    else:
        return f"Meu nome é {nome}"

# Chamando as funções
saudacao()
mensagem = saudacao_personalizada("Ana")
area = calcular_area(5, 3)
apresentacao = apresentar("Carlos", 25)
\`\`\`

## Estruturas de Dados

### Listas
\`\`\`python
# Criando e manipulando listas
numeros = [1, 2, 3, 4, 5]

# Adicionando elementos
numeros.append(6)           # [1, 2, 3, 4, 5, 6]
numeros.insert(0, 0)        # [0, 1, 2, 3, 4, 5, 6]

# Removendo elementos
numeros.remove(3)           # Remove o primeiro 3
ultimo = numeros.pop()      # Remove e retorna o último

# Operações com listas
print(len(numeros))         # Tamanho da lista
print(max(numeros))         # Maior valor
print(min(numeros))         # Menor valor
print(sum(numeros))         # Soma dos valores

# List comprehension
quadrados = [x**2 for x in range(10)]
pares = [x for x in range(20) if x % 2 == 0]
\`\`\`

### Dicionários
\`\`\`python
# Criando dicionários
aluno = {
    "nome": "João",
    "idade": 20,
    "curso": "Ciência da Computação",
    "notas": [8.5, 9.0, 7.5]
}

# Acessando valores
print(aluno["nome"])        # João
print(aluno.get("idade"))   # 20

# Adicionando/Modificando
aluno["semestre"] = 3
aluno["idade"] = 21

# Iterando sobre dicionários
for chave, valor in aluno.items():
    print(f"{chave}: {valor}")

# Dicionário comprehension
quadrados_dict = {x: x**2 for x in range(5)}
\`\`\`

## Algoritmos Fundamentais

### Busca Linear
\`\`\`python
def busca_linear(lista, elemento):
    """Busca um elemento em uma lista"""
    for i, item in enumerate(lista):
        if item == elemento:
            return i
    return -1

# Exemplo de uso
numeros = [1, 3, 5, 7, 9, 11]
indice = busca_linear(numeros, 7)
print(f"Elemento 7 encontrado no índice: {indice}")
\`\`\`

### Ordenação por Bolha
\`\`\`python
def ordenacao_bolha(lista):
    """Ordena uma lista usando o algoritmo bubble sort"""
    n = len(lista)
    for i in range(n):
        for j in range(0, n - i - 1):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
    return lista

# Exemplo de uso
numeros = [64, 34, 25, 12, 22, 11, 90]
numeros_ordenados = ordenacao_bolha(numeros.copy())
print(f"Lista original: {numeros}")
print(f"Lista ordenada: {numeros_ordenados}")
\`\`\`

### Fatorial
\`\`\`python
def fatorial(n):
    """Calcula o fatorial de um número"""
    if n < 0:
        return "Erro: fatorial não definido para números negativos"
    elif n == 0 or n == 1:
        return 1
    else:
        resultado = 1
        for i in range(2, n + 1):
            resultado *= i
        return resultado

# Versão recursiva
def fatorial_recursivo(n):
    if n < 0:
        return "Erro: fatorial não definido para números negativos"
    elif n == 0 or n == 1:
        return 1
    else:
        return n * fatorial_recursivo(n - 1)

# Exemplo de uso
print(f"Fatorial de 5: {fatorial(5)}")
print(f"Fatorial de 5 (recursivo): {fatorial_recursivo(5)}")
\`\`\`

## Tratamento de Erros

### Try/Except
\`\`\`python
def dividir(a, b):
    try:
        resultado = a / b
        return resultado
    except ZeroDivisionError:
        return "Erro: Divisão por zero não é permitida"
    except TypeError:
        return "Erro: Tipos de dados inválidos"
    except Exception as e:
        return f"Erro inesperado: {e}"

# Exemplos de uso
print(dividir(10, 2))    # 5.0
print(dividir(10, 0))    # Erro: Divisão por zero
print(dividir(10, "a"))  # Erro: Tipos de dados inválidos
\`\`\`

## Exercícios Práticos

### 1. Calculadora Simples
\`\`\`python
def calculadora():
    print("Calculadora Simples")
    print("Operações: +, -, *, /")
    
    try:
        num1 = float(input("Digite o primeiro número: "))
        operacao = input("Digite a operação: ")
        num2 = float(input("Digite o segundo número: "))
        
        if operacao == '+':
            resultado = num1 + num2
        elif operacao == '-':
            resultado = num1 - num2
        elif operacao == '*':
            resultado = num1 * num2
        elif operacao == '/':
            if num2 != 0:
                resultado = num1 / num2
            else:
                return "Erro: Divisão por zero"
        else:
            return "Operação inválida"
        
        return f"Resultado: {resultado}"
    
    except ValueError:
        return "Erro: Digite apenas números válidos"

# calculadora()
\`\`\`

### 2. Jogo de Adivinhação
\`\`\`python
import random

def jogo_adivinhacao():
    numero_secreto = random.randint(1, 100)
    tentativas = 0
    max_tentativas = 7
    
    print("Jogo de Adivinhação!")
    print("Pensei em um número entre 1 e 100")
    print(f"Você tem {max_tentativas} tentativas")
    
    while tentativas < max_tentativas:
        try:
            palpite = int(input("Digite seu palpite: "))
            tentativas += 1
            
            if palpite == numero_secreto:
                print(f"Parabéns! Você acertou em {tentativas} tentativas!")
                return
            
            elif palpite < numero_secreto:
                print("Muito baixo! Tente um número maior.")
            else:
                print("Muito alto! Tente um número menor.")
            
            print(f"Tentativas restantes: {max_tentativas - tentativas}")
        
        except ValueError:
            print("Digite apenas números!")
            tentativas -= 1
    
    print(f"Game Over! O número era {numero_secreto}")

# jogo_adivinhacao()
\`\`\`

## Boas Práticas

### 1. Nomes Descritivos
\`\`\`python
# Ruim
a = 10
b = 20
c = a + b

# Bom
idade_usuario = 10
idade_amigo = 20
soma_idades = idade_usuario + idade_amigo
\`\`\`

### 2. Comentários Úteis
\`\`\`python
def calcular_imc(peso, altura):
    """
    Calcula o Índice de Massa Corporal (IMC)
    
    Args:
        peso (float): Peso em quilogramas
        altura (float): Altura em metros
    
    Returns:
        float: Valor do IMC
    """
    imc = peso / (altura ** 2)
    return round(imc, 2)
\`\`\`

### 3. Modularização
\`\`\`python
# Separando responsabilidades
def validar_idade(idade):
    return isinstance(idade, int) and 0 <= idade <= 150

def validar_nome(nome):
    return isinstance(nome, str) and len(nome.strip()) > 0

def cadastrar_usuario(nome, idade):
    if not validar_nome(nome):
        return "Nome inválido"
    
    if not validar_idade(idade):
        return "Idade inválida"
    
    return f"Usuário {nome} cadastrado com sucesso!"
\`\`\`

## Conclusão

A lógica de programação é a base sólida para se tornar um desenvolvedor competente. Python oferece uma sintaxe clara e intuitiva para aprender esses conceitos fundamentais. Pratique regularmente, resolva problemas e construa projetos para consolidar seu conhecimento.

Lembre-se: a programação é uma habilidade que se desenvolve com prática constante. Comece com problemas simples e gradualmente aumente a complexidade dos desafios.`,
      author: 'Fábio Ferreira',
      publishedAt: '2024-01-20T14:30:00Z',
      updatedAt: '2024-01-20T14:30:00Z',
      tags: ['Python', 'Lógica de Programação', 'Algoritmos'],
      readingTime: 15,
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
