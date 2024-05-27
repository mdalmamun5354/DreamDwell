import React, { useState } from 'react';
import { useAppContext } from '../../../app';
import axios from 'axios';
import '../../../assets/stylesheets/addHotel.css';

export default function AddHotel({ setSelected }) {

  const { hotels, setHotels } = useAppContext();
  
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    ratingCount: '',
    price: '',
    location: '',
    facilities: '',
    type: '',
    localAttractions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/hotels/add', formData);
      console.log('Hotel added:', response.data);
      setHotels((hotels) => [...hotels, response.data]);
      setSelected('hotels'); // Redirect back to hotels list
    } catch (error) {
      console.error('Error adding hotel:', error.message);
    }
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <div className="add-hotel-container">
          <h1>Create a Post</h1>
          <hr />

          <label htmlFor="name"><b>Name:</b></label>
          <input
            type="text"
            placeholder="Enter Hotel Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="price"><b>Price:</b></label>
          <input
            type="text"
            placeholder="Enter Price In Dollar"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <label htmlFor="location"><b>Location:</b></label>
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label htmlFor="localAttractions"><b>Local Attractions:</b></label>
          <input
            type="text"
            placeholder="Enter Local Attractions"
            name="localAttractions"
            value={formData.localAttractions}
            onChange={handleChange}
          />

          <label htmlFor="facilities"><b>Facilities:</b></label>
          <input
            type="text"
            placeholder="Enter Facilities"
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
          />

          <label htmlFor="type"><b>Type:</b></label>
          <input
            type="text"
            placeholder="Enter Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />

          <label htmlFor="rating"><b>Rating:</b></label>
          <input
            type="text"
            placeholder="Enter Rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />

          <label htmlFor="ratingCount"><b>Rating Count:</b></label>
          <input
            type="text"
            placeholder="Enter Rating Count"
            name="ratingCount"
            value={formData.ratingCount}
            onChange={handleChange}
          />

          <button type="submit" className="submitbtn">Submit</button>
          <button
            type="button"
            className="submitbtn cancelbtn"
            onClick={() => setSelected('hotels')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
