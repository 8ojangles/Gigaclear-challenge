import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should render with default props', () => {
        render(<LoadingSpinner />);
        
        const spinnerContainer = screen.getByRole('status').parentElement;
        expect(spinnerContainer).toHaveClass('z-50');
        expect(spinnerContainer).toHaveClass('bg-black/25');
        expect(spinnerContainer).toHaveClass('h-screen');
        
        const svgElement = screen.getByRole('status').querySelector('svg');
        expect(svgElement).toHaveAttribute('width', '24');
        expect(svgElement).toHaveAttribute('height', '24');
        expect(svgElement).toHaveClass('text-gray-200');
        expect(svgElement).toHaveClass('fill-blue-600');
    });

    it('should render with custom props', () => {
        render(<LoadingSpinner size={8} primaryColor="text-red-200" secondaryColor="fill-green-600" zPosition={'z50'} />);
        
        const spinnerContainer = screen.getByRole('status').parentElement;
        expect(spinnerContainer).toHaveClass('z-100');
        
        const svgElement = screen.getByRole('status').querySelector('svg');
        expect(svgElement).toHaveAttribute('width', '32');
        expect(svgElement).toHaveAttribute('height', '32');
        expect(svgElement).toHaveClass('text-red-200');
        expect(svgElement).toHaveClass('fill-green-600');
    });
});