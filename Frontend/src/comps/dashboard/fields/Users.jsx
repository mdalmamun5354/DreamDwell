import React, {useState, useEffect} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Users() {
  const [users, setUsers] = useState([]);

  // get data
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);


  const dropUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/drop/${id}`);

      if (response.data) {
        // Optionally, you can update the hotels list after deletion
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);

        // make toast for drop
        toast('Successfully Drop!', {
          icon: '⛔',
        });
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
      // Optionally, you can handle the error or show a message to the user
    }
  };

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="dashboard-header">
        <h1 className="h2">Users</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatem!</p>
      </div>
      <table className="table-dashboard">
        <tr>
          <th width="40%">Username</th>
          <th width="20%">Email</th>
          <th width="15%">Is Admin</th>
          <th>Action</th>
        </tr>
        {users.map((item) => (
          <tr>
            <td style={{ fontWeight: '800', fontSize: '14px' }}>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.isAdmin ? "Yes" : "No"}</td>
            <td>
              <button type="button" className="btn btn-danger action-btn"
                onClick={() => dropUser(item._id)}
              >
                Drop User
              </button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  )
}
