// Core types for the application
export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: Author;
    tags: string[];
    category: string;
    language: string;
    readingTime: number;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    bookmarked?: boolean;
}

export interface Author {
    id: string;
    name: string;
    avatar?: string;
    bio?: string;
    social?: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
    articleCount: number;
}

export interface LibraryItem {
    id: string;
    title: string;
    description: string;
    type: 'ebook' | 'cheatsheet' | 'snippet' | 'tutorial';
    language: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
    downloadUrl?: string;
    previewUrl?: string;
    fileSize?: string;
    pages?: number;
    createdAt: string;
    featured: boolean;
}

export interface SearchResult {
    id: string;
    title: string;
    type: 'article' | 'library';
    excerpt: string;
    tags: string[];
    slug: string;
    highlighted?: string;
}

export interface SearchFilters {
    query?: string;
    search?: string;
    tags?: string[];
    category?: string;
    language?: string;
    type?: 'article' | 'library' | 'all';
    level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
    featured?: boolean;
}

export interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface ApiResponse<T> {
    data: T;
    pagination?: PaginationInfo;
    message?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface Theme {
    mode: 'light' | 'dark';
    primary: string;
    accent: string;
}

export interface Bookmark {
    id: string;
    type: 'article' | 'library';
    title: string;
    url: string;
    addedAt: string;
}

// Component props interfaces
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export interface ModalProps extends BaseComponentProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Hook return types
export interface UseSearchReturn {
    query: string;
    setQuery: (query: string) => void;
    results: SearchResult[];
    loading: boolean;
    error: string | null;
    clearResults: () => void;
}

export interface UseDebounceReturn<T> {
    debouncedValue: T;
    isDebouncing: boolean;
}

export interface UseLibraryReturn {
    items: LibraryItem[];
    loading: boolean;
    error: string | null;
    filters: SearchFilters;
    setFilters: (filters: SearchFilters) => void;
    pagination: PaginationInfo | null;
}

export interface UseArticlesReturn {
    articles: Article[];
    loading: boolean;
    error: string | null;
    filters: SearchFilters;
    setFilters: (filters: SearchFilters) => void;
    pagination: PaginationInfo | null;
}

// Context types
export interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: SearchResult[];
    isSearching: boolean;
    clearSearch: () => void;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export interface BookmarkContextType {
    bookmarks: Bookmark[];
    addBookmark: (item: Omit<Bookmark, 'id' | 'addedAt'>) => void;
    removeBookmark: (id: string) => void;
    isBookmarked: (id: string) => boolean;
    exportBookmarks: () => void;
}
