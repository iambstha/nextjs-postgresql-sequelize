"use client"
import deleteItem from '@/db/op/deleteItem'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const [items, setItems] = useState([])
    const router = useRouter()

    const handleUpdateClick = (itemId) => {
        localStorage.setItem('itemIdToUpdate', itemId);
        window.location.href = '/items/update-item'; // Redirect to the update item page
    };

    
    const handleDeleteClick = async (itemId) => {
        try {
          await deleteItem(itemId);
          router.push('/items');
        } catch (error) {
          // Handle error, if any
          console.log("Error deleting item:", error);
        }
      }

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

    return (
        <div>
            <h1>All items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id} className=' flex justify-center items-center gap-4 p-4 '>
                        <span className=' m-2 w-1/3 '>{item.name}</span>
                        <span className=' m-2 w-1/3 '>Rs. {item.price}</span>
                        <button onClick={() => handleUpdateClick(item.id)}  className=' border w-1/3 p-2 px-4 bg-blue-500 border-blue-500 text-white rounded '>Update</button>
                        <button onClick={() => handleDeleteClick(item.id)} className=' border w-1/3 p-2 px-4 bg-red-500 border-red-500 text-white rounded '>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default page