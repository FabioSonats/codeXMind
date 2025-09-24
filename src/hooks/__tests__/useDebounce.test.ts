import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should return initial value immediately', () => {
        const { result } = renderHook(() => useDebounce('test', 500));

        expect(result.current.debouncedValue).toBe('test');
        expect(result.current.isDebouncing).toBe(false);
    });

    it('should debounce value changes', () => {
        const { result, rerender } = renderHook(
            ({ value, delay }) => useDebounce(value, delay),
            { initialProps: { value: 'initial', delay: 500 } }
        );

        expect(result.current.debouncedValue).toBe('initial');
        expect(result.current.isDebouncing).toBe(false);

        // Change value
        rerender({ value: 'updated', delay: 500 });

        expect(result.current.debouncedValue).toBe('initial');
        expect(result.current.isDebouncing).toBe(true);

        // Fast forward time
        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(result.current.debouncedValue).toBe('updated');
        expect(result.current.isDebouncing).toBe(false);
    });

    it('should handle multiple rapid changes', () => {
        const { result, rerender } = renderHook(
            ({ value, delay }) => useDebounce(value, delay),
            { initialProps: { value: 'initial', delay: 500 } }
        );

        // Multiple rapid changes
        rerender({ value: 'change1', delay: 500 });
        rerender({ value: 'change2', delay: 500 });
        rerender({ value: 'change3', delay: 500 });

        expect(result.current.debouncedValue).toBe('initial');
        expect(result.current.isDebouncing).toBe(true);

        // Fast forward time
        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(result.current.debouncedValue).toBe('change3');
        expect(result.current.isDebouncing).toBe(false);
    });
});
