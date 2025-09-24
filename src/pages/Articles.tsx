import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, User, Tag } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';
import type { SearchFilters } from '../types';

/**
 * Articles Page Component
 * Displays paginated list of articles with filters and search
 */
export default function Articles() {
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const filters: SearchFilters = {
        query: searchQuery || undefined,
        tags: selectedTag ? [selectedTag] : undefined,
        language: selectedLanguage || undefined,
        type: 'article',
    };

    const { articles, loading, error, setFilters } = useArticles(filters);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setFilters({ ...filters, query });
    };

    const handleTagFilter = (tag: string) => {
        setSelectedTag(tag === selectedTag ? '' : tag);
        setFilters({ ...filters, tags: tag === selectedTag ? undefined : [tag] });
    };

    const handleLanguageFilter = (language: string) => {
        setSelectedLanguage(language === selectedLanguage ? '' : language);
        setFilters({
            ...filters,
            language: language === selectedLanguage ? undefined : language,
        });
    };

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedTag('');
        setSelectedLanguage('');
        setFilters({ type: 'article' });
    };

    return (
        <div className='min-h-screen bg-slate-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl md:text-4xl font-display font-bold text-white mb-4'>
                        Artigos
                    </h1>
                    <p className='text-lg text-gray-300'>
                        Explore nossa coleção de artigos técnicos e tutoriais
                    </p>
                </div>

                {/* Search and Filters */}
                <div className='bg-slate-800/50 rounded-2xl p-6 mb-8 border border-slate-700'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        {/* Search Bar */}
                        <div className='flex-1 relative'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                            <input
                                type='text'
                                placeholder='Buscar artigos...'
                                value={searchQuery}
                                onChange={e => handleSearch(e.target.value)}
                                className='w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                            />
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className='flex items-center px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white hover:bg-slate-600 transition-colors duration-200'
                        >
                            <Filter className='h-5 w-5 mr-2' />
                            Filtros
                        </button>
                    </div>

                    {/* Filters Panel */}
                    {showFilters && (
                        <div className='mt-6 pt-6 border-t border-slate-700'>
                            <div className='grid md:grid-cols-2 gap-6'>
                                {/* Tags */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-3'>
                                        Tags
                                    </label>
                                    <div className='flex flex-wrap gap-2'>
                                        {[
                                            'React',
                                            'TypeScript',
                                            'Node.js',
                                            'Python',
                                            'JavaScript',
                                            'CSS',
                                        ].map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => handleTagFilter(tag)}
                                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${selectedTag === tag
                                                    ? 'bg-cyan-600 text-white'
                                                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                                                    }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Languages */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-3'>
                                        Linguagens
                                    </label>
                                    <div className='flex flex-wrap gap-2'>
                                        {[
                                            'JavaScript',
                                            'TypeScript',
                                            'Python',
                                            'Java',
                                            'C++',
                                            'Go',
                                        ].map(language => (
                                            <button
                                                key={language}
                                                onClick={() => handleLanguageFilter(language)}
                                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${selectedLanguage === language
                                                    ? 'bg-cyan-600 text-white'
                                                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                                                    }`}
                                            >
                                                {language}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Clear Filters */}
                            <div className='mt-6 flex justify-end'>
                                <button
                                    onClick={clearFilters}
                                    className='px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200'
                                >
                                    Limpar filtros
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Articles Grid */}
                {loading ? (
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className='bg-slate-800/50 rounded-2xl p-6 border border-slate-700 animate-pulse'
                            >
                                <div className='h-4 bg-slate-700 rounded mb-4'></div>
                                <div className='h-3 bg-slate-700 rounded mb-2'></div>
                                <div className='h-3 bg-slate-700 rounded mb-4'></div>
                                <div className='flex gap-2 mb-4'>
                                    <div className='h-6 w-16 bg-slate-700 rounded-full'></div>
                                    <div className='h-6 w-20 bg-slate-700 rounded-full'></div>
                                </div>
                                <div className='h-8 bg-slate-700 rounded'></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className='text-center py-12'>
                        <p className='text-red-400 text-lg'>{error}</p>
                    </div>
                ) : (
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {articles.map(article => (
                            <article
                                key={article.id}
                                className='bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-colors duration-200 group'
                            >
                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200'>
                                        <Link to={`/artigos/${article.slug}`}>{article.title}</Link>
                                    </h3>
                                    <p className='text-gray-300 text-sm line-clamp-3'>
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {article.tags.slice(0, 3).map(tag => (
                                        <span
                                            key={tag}
                                            className='inline-flex items-center px-2 py-1 bg-slate-700 text-cyan-400 text-xs font-medium rounded-full'
                                        >
                                            <Tag className='h-3 w-3 mr-1' />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex items-center justify-between text-sm text-gray-400'>
                                    <div className='flex items-center'>
                                        <User className='h-4 w-4 mr-1' />
                                        {article.author.name}
                                    </div>
                                    <div className='flex items-center'>
                                        <Clock className='h-4 w-4 mr-1' />
                                        {article.readingTime} min
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <Link
                                        to={`/artigos/${article.slug}`}
                                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200'
                                    >
                                        Ler artigo
                                        <svg
                                            className='ml-1 h-4 w-4'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 5l7 7-7 7'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && articles.length === 0 && (
                    <div className='text-center py-12'>
                        <p className='text-gray-400 text-lg'>Nenhum artigo encontrado</p>
                        <p className='text-gray-500 text-sm mt-2'>
                            Tente ajustar os filtros ou fazer uma nova busca
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
