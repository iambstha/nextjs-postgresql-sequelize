'use client'

import React, { useState, useEffect } from 'react';

const page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
          console.log("Succesfully updated users state.")
        } else {
          console.log("Error fetching data.");
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchData();
  }, []);

  return (

<div>
<h1>All Users</h1>
<ul>
    {users.map(user => (
        <li key={user.id} className=' flex justify-center items-center gap-4 p-4 '>
            <span className=' m-2 w-1/3 '>{user.fname}</span>
            <span className=' m-2 w-1/3 '>{user.lname}</span>
            <button onClick={() => handleUpdateClick(user.id)}  className=' border w-1/3 p-2 px-4 bg-blue-500 border-blue-500 text-white rounded '>Update</button>
            <button onClick={() => handleDeleteClick(user.id)} className=' border w-1/3 p-2 px-4 bg-red-500 border-red-500 text-white rounded '>Delete</button>
        </li>
    ))}

</ul>
</div>
  );
};

export default page;
