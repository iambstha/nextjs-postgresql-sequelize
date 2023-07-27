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
    <div className=' flex flex-col justify-center items-center w-full '>
      <h1 className=' p-4 '>All Users</h1>
      <ul className=' flex gap-4 flex-wrap '>
        {users && users.map(user => (
          <li key={user.id}>{user.fname} {user.lname}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
