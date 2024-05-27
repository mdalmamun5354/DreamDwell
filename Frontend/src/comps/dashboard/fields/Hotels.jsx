import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useAppContext } from "../../../app";

export default function Hotels({setSelected}) {
  const { hotels, setHotels, setItem } = useAppContext();

  
  const deleteHotel = async (id) => {
    // console.log(id);
    try {
      const response = await axios.delete(`http://localhost:3000/hotels/drop/${id}`);
      console.log(response.data); // Log success message or handle the response as needed

      // Optionally, you can update the hotels list after deletion
      const res = await axios.get("http://localhost:3000/hotels");
      setHotels(res.data);
    } catch (error) {
      console.error('Error deleting hotel:', error.message);
      // Optionally, you can handle the error or show a message to the user
    }
  };
  
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="dashboard-header">
        <h1 className="h2">Hotels</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatem!</p>
      </div>
      <button type="button" class="btn btn-primary"
      onClick={()=>{setSelected('addNewHotel')}}
      >Add new hotel</button>
      <table className="table-dashboard">
        <tr>
          <th width="40%">Title</th>
          <th width="20%">Ratting</th>
          <th width="15%">Location</th>
          <th>Action</th>
        </tr>
        {hotels.map((item) => (
          <tr>
            <td style={{ fontWeight: '800', fontSize: '14px' }}>{item.name}</td>
            <td>{item.rating}</td>
            <td>{item.location}</td>
            <td>
              <Link to='/hotel'>
                <button type="button" class="btn btn-info action-btn"
                  onClick={() => { setItem(item) }}
                >
                  View
                </button>
              </Link>
              <button type="button" className="btn btn-warning action-btn">Edit</button>
              <button type="button" className="btn btn-danger action-btn"
                onClick={() => deleteHotel(item._id)}
              >
                Drop
              </button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
