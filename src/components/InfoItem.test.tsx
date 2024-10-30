import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoItem from './InfoItem';

describe('InfoItem', () => {
    it('should render the label and text', () => {
        render(<InfoItem label="Capital" text="Washington, D.C." />);
        
        expect(screen.getByText('Capital:')).toBeInTheDocument();
        expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();
    });
});