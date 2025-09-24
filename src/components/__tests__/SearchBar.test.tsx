import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { SearchProvider } from '../../contexts/SearchContext';

const renderWithProviders = (component: React.ReactElement) => {
    return render(
        <BrowserRouter>
            <SearchProvider>{component}</SearchProvider>
        </BrowserRouter>
    );
};

describe('SearchBar', () => {
    it('renders search input', () => {
        renderWithProviders(<SearchBar />);

        const searchInput = screen.getByPlaceholderText(/buscar artigos/i);
        expect(searchInput).toBeInTheDocument();
    });

    it('updates search query on input change', () => {
        renderWithProviders(<SearchBar />);

        const searchInput = screen.getByPlaceholderText(/buscar artigos/i);

        fireEvent.change(searchInput, { target: { value: 'react' } });

        expect(searchInput).toHaveValue('react');
    });

    it('shows clear button when there is text', () => {
        renderWithProviders(<SearchBar />);

        const searchInput = screen.getByPlaceholderText(/buscar artigos/i);

        fireEvent.change(searchInput, { target: { value: 'react' } });

        const clearButton = screen.getByRole('button', { name: /clear/i });
        expect(clearButton).toBeInTheDocument();
    });

    it('clears search when clear button is clicked', () => {
        renderWithProviders(<SearchBar />);

        const searchInput = screen.getByPlaceholderText(/buscar artigos/i);

        fireEvent.change(searchInput, { target: { value: 'react' } });
        expect(searchInput).toHaveValue('react');

        const clearButton = screen.getByRole('button', { name: /clear/i });
        fireEvent.click(clearButton);

        expect(searchInput).toHaveValue('');
    });

    it('handles keyboard navigation', () => {
        renderWithProviders(<SearchBar />);

        const searchInput = screen.getByPlaceholderText(/buscar artigos/i);

        fireEvent.keyDown(searchInput, { key: 'Escape' });

        // Should not throw any errors
        expect(searchInput).toBeInTheDocument();
    });
});
