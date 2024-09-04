import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantList from './RestaurantList';

test('renders RestaurantList component and displays restaurants', () => {
    const restaurants = [
        { id: 1, name: 'Restaurant 1', description: 'Description 1', location: 'Location 1' },
        { id: 2, name: 'Restaurant 2', description: 'Description 2', location: 'Location 2' }
    ];

    render(<RestaurantList restaurants={restaurants} />);

    // Check if restaurants are rendered
    expect(screen.getByText('Restaurant 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('Restaurant 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();
});
