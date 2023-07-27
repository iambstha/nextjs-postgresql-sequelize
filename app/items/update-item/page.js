"use client"
import React, { useEffect, useState } from 'react'
import updateItem from '@/db/op/updateItem'

const page = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [items, setItems] = useState([])
    const [storedItemId, setStoredItemId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/items")
                if (res.ok) {
                    const data = await res.json();
                    setItems(data)
                }
                else {
                    console.log("Failed fetching items.")
                }
            } catch (error) {
                console.log("Error" + error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        // Get the item ID from localStorage and set it in state
        const storedItemId = localStorage.getItem('itemIdToUpdate');
        setStoredItemId(storedItemId);

        // Clean up the stored item ID when the component unmounts
        return () => localStorage.removeItem('itemIdToUpdate');
    }, []);

    useEffect(() => {
        // Find the selected item and set the state
        const selectedItem = items.find(item => item.id == storedItemId);
        console.log(selectedItem)
        if (selectedItem) {
          setName(selectedItem.name);
          setPrice(selectedItem.price);
        }
      }, [storedItemId, items]);



    const handleChange = (e) => {
        if (e.target.name === 'name') { setName(e.target.value) }
        else if (e.target.name === 'price') { setPrice(e.target.value) }
        else {
            console.log("Something is wrong.")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateItem(name, price, storedItemId)
        setName('')
        setPrice('')
    }

    console.log(items)

    return (
        <div className=' flex flex-col justify-center items-center '>
        <h1 className=' p-4 '>Update Item</h1>
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