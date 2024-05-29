import React, { useState } from 'react';
import { useAppContext } from '../../../app';
import axios from 'axios';
import '../../../assets/stylesheets/addHotel.css';
import toast from 'react-hot-toast';

export default function AddHotel({ setSelected }) {

  const { setHotels, item, setItem } = useAppContext();

  const [formData, setFormData] = useState({
    name: item ? item.name : '',
    rating: item ? item.rating : '',
    ratingCount: item ? item.ratingCount : '',
    price: item ? item.price : '',
    location: item ? item.location : '',
    facilities: item ? item.facilities : '',
    type: item ? item.type : '',
    localAttractions: item ? item.localAttractions : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function editHotel() {
    try {
      const response = await axios.post(`http://localhost:3000/hotels/edit/${item._id}`, formData);
      // console.log(response.data); // Log success message or handle the response as needed

      if (response.data) {
        const res = await axios.get("http://localhost:3000/hotels");
        setHotels(res.data);
        toast.success('Successfully Edited!')
      }
    } catch (error) {
      console.error('Error editing hotel:', error.message);
    }
    setItem(null);
  };

  async function addHotel() {
    try {
      const response = await axios.post('http://localhost:3000/hotels/add', formData);
      if (response.data) {
        setHotels((hotels) => [...hotels, response.data]);
        toast.success('Successfully Added!')
      }
    } catch (error) {
      console.error('Error adding hotel:', error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (item) editHotel();
    else addHotel();

    setSelected('hotels'); // Redirect back to hotels list
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
            onClick={() => { setItem(null); setSelected('hotels') }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
