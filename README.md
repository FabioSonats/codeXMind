# CodeXMind

> **Aprenda tecnologia. Pratique com propósito.**

CodeXMind é uma plataforma educacional que oferece artigos técnicos, recursos de biblioteca e conteúdo sobre inteligência artificial para desenvolvedores de todos os níveis.

## 🚀 Características

- **Artigos Técnicos**: Tutoriais profundos sobre programação, frameworks e melhores práticas
- **Biblioteca de Recursos**: Ebooks, cheatsheets, snippets e tutoriais organizados por linguagem e nível
- **Inteligência Artificial**: Recursos e tutoriais sobre IA, machine learning e automação
- **Busca Avançada**: Sistema de busca com autocomplete, debouncing e navegação por teclado
- **Design Responsivo**: Interface moderna e acessível, otimizada para todos os dispositivos
- **Tema Escuro/Claro**: Suporte completo a temas com persistência no localStorage
- **Bookmarking**: Sistema de favoritos com exportação de dados

## 🛠️ Stack Tecnológica

### Frontend

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS com configurações customizadas
- **React Router v6** - Roteamento com lazy loading
- **Lucide React** - Ícones modernos

### Qualidade e Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Husky** - Git hooks
- **Jest** - Framework de testes
- **React Testing Library** - Testes de componentes

### Arquitetura

- **SOLID Principles** - Princípios de design aplicados
- **Clean Code** - Código limpo e bem estruturado
- **Repository Pattern** - Separação de responsabilidades
- **Custom Hooks** - Lógica reutilizável
- **Context API** - Gerenciamento de estado global

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI básicos
│   ├── Header.tsx      # Cabeçalho principal
│   ├── SearchBar.tsx   # Barra de busca
│   └── Footer.tsx      # Rodapé
├── containers/         # Componentes com estado
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── services/           # Camada de serviços (Repository pattern)
├── contexts/           # Contextos React
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
└── assets/             # Recursos estáticos
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone <repository-url>
   cd codexmind
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Execute o mock server (opcional)**
   ```bash
   npm run mock-server
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor de desenvolvimento
npm run mock-server      # Inicia o mock server na porta 3001

# Build e Deploy
npm run build           # Build para produção
npm run preview         # Preview do build de produção

# Qualidade de Código
npm run lint            # Executa o ESLint
npm run lint:fix        # Corrige problemas do ESLint
npm run format          # Formata o código com Prettier
npm run format:check    # Verifica formatação

# Testes
npm run test            # Executa os testes
npm run test:watch      # Executa testes em modo watch
npm run test:coverage   # Executa testes com cobertura
```

## 🎨 Design System

### Paleta de Cores

- **Navy**: `#0f172a` (fundo principal)
- **Cyan**: `#06b6d4` (cor de destaque)
- **Gradientes**: Suaves e sutis para elementos especiais

### Tipografia

- **Display**: Plus Jakarta Sans (títulos)
- **Body**: Inter (texto corrido)

### Componentes

- **Bordas**: Arredondadas (`rounded-soft`, `rounded-xl`)
- **Sombras**: Suaves (`shadow-soft`, `shadow-soft-lg`)
- **Transições**: 200ms ease-out

## 🧪 Testes

O projeto inclui testes unitários e de integração:

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Executar com cobertura
npm run test:coverage
```

### Estrutura de Testes

- **Unit Tests**: Hooks e utilitários
- **Component Tests**: Componentes React
- **Integration Tests**: Fluxos completos

## 📱 Páginas e Rotas

- `/` - Página inicial com hero e destaques
- `/artigos` - Listagem de artigos com filtros
- `/artigos/:slug` - Visualização de artigo
- `/biblioteca` - Recursos da biblioteca
- `/ia` - Conteúdo sobre inteligência artificial
- `/sobre` - Sobre o CodeXMind
- `/contato` - Formulário de contato
- `/*` - Página 404 customizada

## 🔧 Configuração

### Tailwind CSS

Configuração customizada em `tailwind.config.js`:

- Cores personalizadas (navy, cyan)
- Bordas arredondadas expandidas
- Sombras suaves
- Fontes modernas
- Animações customizadas

### ESLint

Configuração em `eslint.config.js`:

- Regras para React e TypeScript
- Integração com Prettier
- Regras de acessibilidade

### Prettier

Configuração em `.prettierrc`:

- Formatação consistente
- Suporte a JSX
- Configurações otimizadas

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=CodeXMind
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Siga os princípios SOLID
- Use TypeScript para tipagem
- Escreva testes para novas funcionalidades
- Mantenha o código limpo e documentado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Fábio Ferreira**

- Portfólio: [https://fabiosonats.github.io/my-portifolio/](https://fabiosonats.github.io/my-portifolio/)
- GitHub: [@FabioSonats](https://github.com/FabioSonats)
- LinkedIn: [Fábio Ferreira](https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/)
- WhatsApp: [+55 42 99164-3802](https://wa.me/5542991643802)

## 🙏 Agradecimentos

- Comunidade React
- Tailwind CSS
- Lucide Icons
- Todos os contribuidores

---

**Criado com ❤️ por Fábio Ferreira**
