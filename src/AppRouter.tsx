import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Library = lazy(() => import('./pages/Library'));
const AI = lazy(() => import('./pages/AI'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Loading component for lazy-loaded pages
 */
function PageLoader() {
    return (
        <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
            <div className='text-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4'></div>
                <p className='text-gray-300'>Carregando...</p>
            </div>
        </div>
    );
}

/**
 * App Router Component
 * Configures all routes with lazy loading for optimal performance
 */
export default function AppRouter() {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Public Routes */}
                    <Route path='/' element={<Home />} />
                    <Route path='/artigos' element={<Articles />} />
                    <Route path='/artigos/:slug' element={<ArticleDetail />} />
                    <Route path='/biblioteca' element={<Library />} />
                    <Route path='/ia' element={<AI />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/contato' element={<Contact />} />

                    {/* 404 Route - must be last */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
