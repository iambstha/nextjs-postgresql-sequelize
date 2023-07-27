"use client"
import createuser from '@/db/op/createUser'
import { useState } from 'react'

export default function Home() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'fname') {
      setFname(e.target.value);
    } else if (e.target.name === 'lname') {
      setLname(e.target.value);
    } else {
      console.log("Something is not right.");
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    createuser(fname,lname)
    setFname('')
    setLname('')
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form submission
  
  //   const data = {
  //     fname,
  //     lname
  //   };
  
  //   try {
  //     const response = await fetch('http://localhost:3000/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });
  
  //     // Handle the response as needed
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // }
  
  return (
      <div className=' m-2 '>
        <form className=' flex gap-4 items-stretch ' onSubmit={handleSubmit}>
          <input type="text" name='fname' value={fname} onChange={handleChange}  className=' border outline-none p-2 px-4  '/>
          <input type="text" name='lname' value={lname} onChange={handleChange}  className=' border outline-none p-2 px-4  '/>
          <button type="submit" className=' border border-blue-500 bg-blue-500 rounded p-2 px-4 text-white '>Submit</button>
        </form>
      </div>
  )
}
