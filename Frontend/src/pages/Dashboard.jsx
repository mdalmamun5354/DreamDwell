import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from "../app";

import '../assets/stylesheets/dashboard.css';
import axios from 'axios';

export default function Dashboard() {

  const [selected, setSelected] = useState('hotels');
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


  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      // Adding click event listeners to each dashboard card
      var cards = document.querySelectorAll('.dashboard-card');
      cards.forEach(function (card, index) {
        card.addEventListener('click', function () {
          alert('Card ' + (index + 1) + ' clicked!');
        });
      });

      // Function to add a new row to the table
      function addTableRow(data) {
        var table = document.querySelector('.table-dashboard');
        var newRow = table.insertRow();
        data.forEach(function (cellData) {
          var cell = newRow.insertCell();
          cell.textContent = cellData;
        });
      }

      // Example: Dynamically adding data to the table
      var sampleData = [
        ["Data 7", "Data 8", "Data 9"],
        ["Data 10", "Data 11", "Data 12"]
      ];

      sampleData.forEach(function (rowData) {
        addTableRow(rowData);
      });
    });
  }, []);

  return (
    <div className='dashboard-con'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Dashboard</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item dash-nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item dash-nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column nav-select-field-con">
                <li className={`nav-item ${selected === 'hotels' ? 'selected' : ''}`}
                  onClick={() => { setSelected('hotels') }}
                >
                  Hotels
                </li>
                <li className={`nav-item ${selected === 'users' ? 'selected' : ''}`}
                  onClick={() => { setSelected('users') }}
                >
                  Users
                </li>
                <li className={`nav-item ${selected === 'orders' ? 'selected' : ''}`}
                  onClick={() => { setSelected('orders') }}
                >
                  Orders
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="dashboard-header">
              <h1 className="h2">Hotels</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatem!</p>
            </div>
            <button type="button" class="btn btn-primary">Add new hotel</button>
            <table className="table-dashboard">
              <tr>
                <th width="40%">Title</th>
                <th width="20%">Ratting</th>
                <th width="15%">Location</th>
                <th>Action</th>
              </tr>
              {hotels.map((item) => (
                <tr>
                  <td>{item.name}</td>
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
        </div>
      </div>
    </div>
  )
}
