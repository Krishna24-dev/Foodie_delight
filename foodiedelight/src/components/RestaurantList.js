import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>{restaurant.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
