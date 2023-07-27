"use client"
import React,{useEffect, useState} from 'react'

const page = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/items")
                if(res.ok){
                    const data = await res.json();
                    setItems(data)
                }
                else{
                    console.log("Failed fetching items.")
                }
            } catch (error) {
                console.log("Error" + error)
            }
        }
        fetchData();
    },[])

  return (
    <div>
        <h1>All items</h1>
        <ul>
            {items && items.map(item => (
            <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </li>
            )
            )}
        </ul>
    </div>
  )
}

export default page