// src/services/restaurantService.js

export const getRestaurants = async () => {
    // Mock data as a placeholder for API response
    const mockData = [
        { id: 1, name: 'The Spicy Spoon', description: 'Best spicy food in town', location: 'New York, NY' },
        { id: 2, name: 'Green Garden', description: 'Fresh and organic', location: 'San Francisco, CA' },
        { id: 3, name: 'Pizza Paradise', description: 'Heaven for pizza lovers', location: 'Chicago, IL' },
    ];
    
    // Simulate an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockData), 500); // 500ms delay
    });
};
