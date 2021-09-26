import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });

  return (
    <div className="px-5 mb-4 mt-4">
      <a href="/" className="btn btn-success mb-3" role="button">
        Back to Home
      </a>
      <table className="table table-striped w-auto">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
