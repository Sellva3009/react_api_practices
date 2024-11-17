import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data); 
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []);
    if(loading) {
        return <div>Loading...</div>
    }
  return (
    <>
      <div>UserList</div>
      <ul className="userDetail">
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>Name</strong> - {user.name}
            </div>
            <div>
              <strong>Username</strong> - {user.username}
            </div>
            <div>
              <strong>Phone</strong> - {user.phone}
            </div>
            <div>
              <strong>Email</strong> - {user.email}
            </div>
            <div>
              <strong>Website</strong> - {user.website}
            </div>
            <div>
              <strong>Address</strong> - {user.address.suite},{" "}
              {user.address.street}, <br /> {user.address.city} -{" "}
              {user.address.zipcode}
            </div>
            {/* <div>
              <strong>Location</strong> -
              <iframe
              title="location"
                width="300"
                height="170"
                src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&hl=es&z=14&amp;output=embed`}
               />
            </div> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList

