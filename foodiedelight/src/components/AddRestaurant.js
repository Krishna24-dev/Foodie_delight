
import React, { useState } from 'react';

const AddRestaurant = ({ onAddRestaurant }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleAdd = () => {
        console.log('Name:',name );
        console.log('Description:', description);
        console.log('Location:', location);
        
        if (name && description && location) {
            const newRestaurant = {
                id: Date.now(),
                name,
                description,
                location,
            };
    
            console.log('Adding restaurant:', newRestaurant);
            onAddRestaurant(newRestaurant);
    
            setName('');
            setDescription('');
            setLocation('');
        } else {
            alert('Please fill in all fields');
        }
    };
    
    return (
        <div className="add-restaurant">
            <h2>Add Restaurant</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleAdd}>Add Restaurant</button>
        </div>
    );
};

export default AddRestaurant;
