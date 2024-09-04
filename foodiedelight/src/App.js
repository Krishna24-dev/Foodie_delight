import React, { useState } from 'react';
import AddRestaurant from './components/AddRestaurant';
import RestaurantList from './components/RestaurantList';
import './index.css'; // Ensure this CSS import is correct

const App = () => {
    const [restaurants, setRestaurants] = useState([
        { id: 1, name: 'Chowrasta', description: 'Best indian foods', location: 'Nashua,NH' },
        { id: 2, name: 'Bawarchi', description: 'Spicy indian foods', location: 'Lowell,MA' },
        { id: 3, name: 'Paradise Biryani', description: 'Best biryani in town', location: 'Boston,MA' },
    ]);

    const addRestaurant = (newRestaurant) => {
        setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
    };

    return (
        <div className="App">
            <h1>FOODIE DELIGHT</h1>
            <AddRestaurant onAddRestaurant={addRestaurant} />
            <RestaurantList restaurants={restaurants} />
        </div>
        
    );
};

export default App;
