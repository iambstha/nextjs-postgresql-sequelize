"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [items, setItems] = useState([])

    const handleUpdateClick = (itemId) => {
        localStorage.setItem('itemIdToUpdate', itemId);
        window.location.href = '/items/update-item'; // Redirect to the update item page
    };

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
                    <li key={item.id} onClick={() => handleUpdateClick(item.id)} className=' cursor-pointer '>
                        {item.name} - {item.price}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default page