import React from 'react'

export default function DashboardSideBar({selected, setSelected}) {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column nav-select-field-con">
          <li className={`nav-item ${selected === 'hotels' || selected === 'addNewHotel' ? 'selected' : ''}`}
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
  )
}
