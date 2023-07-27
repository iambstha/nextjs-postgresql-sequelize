"use client"
import createItem from '@/db/op/createItem'
import React, { useState } from 'react'

const page = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    

    const handleChange = (e) => {
        if(e.target.name === 'name'){setName(e.target.value)}
        else if(e.target.name === 'price'){setPrice(e.target.value)}
        else{
            console.log("Something is wrong.")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createItem(name,price)
        setName('')
        setPrice('')
    }


  return (
    <div className=' flex flex-col justify-center items-center '>
    <h1 className=' p-4 '>Add Item</h1>
    <form className='flex gap-4 items-center justify-center m-4' onSubmit={handleSubmit}>
      {/* Bind input fields to their respective state variables */}
      <label htmlFor="name">Item Name:</label>
      <input type="text" name='name' value={name} onChange={handleChange} className='border outline-none p-2 px-4' />
      <label htmlFor="price">Price:</label>
      <input type="text" name='price' value={price} onChange={handleChange} className='border outline-none p-2 px-4' />
      <button type="submit" className='border border-blue-500 bg-blue-500 rounded p-2 px-4 text-white'>Submit</button>
    </form>
  </div>

  )
}

export default page