import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Categories from './pages/Categories';
import Library from './pages/Library';
import AI from './pages/AI';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useScrollToTop } from './hooks/useScrollToTop';

/**
 * Main App Component
 * Provides routing and main layout structure
 */
function AppContent() {
  useScrollToTop();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<Articles />} />
          <Route path="/artigos/:slug" element={<ArticleDetail />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/biblioteca" element={<Library />} />
          <Route path="/ia" element={<AI />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;