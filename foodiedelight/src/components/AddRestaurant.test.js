

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddRestaurant from './AddRestaurant';

test('renders AddRestaurant component and handles input', () => {
    const mockOnAddRestaurant = jest.fn();

    render(<AddRestaurant onAddRestaurant={mockOnAddRestaurant} />);

    const nameInput = screen.getByPlaceholderText('Name');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const locationInput = screen.getByPlaceholderText('Location');

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'Test Restaurant' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(locationInput, { target: { value: 'Test Location' } });
    

    expect(mockOnAddRestaurant).toHaveBeenCalledWith({
        id: expect.any(Number),
        name: 'Test Restaurant',
        description: 'Test Description',
        location: 'Test Location',
    });
});