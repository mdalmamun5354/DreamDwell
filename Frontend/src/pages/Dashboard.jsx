import React, { useState, useEffect } from 'react';

import '../assets/stylesheets/dashboard.css';

import Header from '../comps/dashboard/Header';
import SideBar from '../comps/dashboard/SideBar';
import Field from '../comps/dashboard/Field';
import { useAppContext } from '../app';

export default function Dashboard() {

  const { setItem } = useAppContext();
  const [selected, setSelected] = useState('hotels');

  useEffect(() => {
    // set item null for avoid previous item
    setItem(null);
    
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

      <Header />

      <div className="container-fluid">
        <div className="row">

          <SideBar selected={selected} setSelected={setSelected} />
          <Field selected={selected} setSelected={setSelected} />

        </div>
      </div>
    </div>
  )
}
