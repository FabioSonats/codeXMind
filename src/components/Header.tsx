import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchIcon, MenuIcon, CloseIcon } from './icons/SocialIcons';
// import SearchBar from './SearchBar';

/**
 * Header Component
 * Main navigation header with logo, menu, and search
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Artigos', href: '/artigos' },
    { name: 'Biblioteca', href: '/biblioteca' },
    { name: 'IA', href: '/ia' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const headerStyle = {
    position: 'sticky' as const,
    top: 0,
    zIndex: 50,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #334155',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  };

  const logoIconStyle = {
    width: '2rem',
    height: '2rem',
    background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    flexShrink: 0,
  };

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          {/* Logo */}
          <div>
            <Link to='/' style={logoStyle}>
              <div style={logoIconStyle}>C</div>
              <span>CodeXMind</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            style={{ display: 'none', alignItems: 'center', gap: '2rem' }}
            className='desktop-nav'
          >
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: isActive(item.href) ? '#22d3ee' : '#cbd5e1',
                  textDecoration: 'none',
                  borderBottom: isActive(item.href)
                    ? '2px solid #22d3ee'
                    : 'none',
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Search Button */}
          <div
            style={{ display: 'none', alignItems: 'center', gap: '1rem' }}
            className='desktop-actions'
          >
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{
                padding: '0.5rem',
                color: '#9ca3af',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchIcon size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            className='mobile-menu'
          >
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{
                padding: '0.5rem',
                color: '#9ca3af',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchIcon size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: '0.5rem',
                color: '#9ca3af',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={20} />
              ) : (
                <MenuIcon size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar - Responsive */}
        {isSearchOpen && (
          <div
            style={{
              padding: '1rem 0',
              borderTop: '1px solid #334155',
              position: 'relative',
              zIndex: 40,
              ...(window.innerWidth >= 768
                ? {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid #334155',
                  }
                : {}),
            }}
          >
            {/* <SearchBar /> */}
            <div
              style={{
                maxWidth: '80rem',
                margin: '0 auto',
                padding: '0 1rem',
              }}
            >
              <input
                type='text'
                placeholder='Buscar artigos, biblioteca...'
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div style={{ padding: '1rem 0', borderTop: '1px solid #334155' }}>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: isActive(item.href) ? '#22d3ee' : '#cbd5e1',
                    backgroundColor: isActive(item.href)
                      ? '#1e293b'
                      : 'transparent',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <style>{`
                @media (min-width: 768px) {
                    .desktop-nav { display: flex !important; }
                    .desktop-actions { display: flex !important; }
                    .mobile-menu { display: none !important; }
                }
            `}</style>
    </header>
  );
}
