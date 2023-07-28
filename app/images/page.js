"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Images = () => {
  const [image, setImage] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/image")
        if(res.ok){
          const data = await res.json()
          setImage(data)
        }
        else{
          console.log("Could not fetch image data")
        }
      } catch (error) {
        console.log("Error: " + error)
      }
    }
    fetchData()
  }, [])
  
  console.log(image)

  return (
    <div>
      <h1>All Images</h1>
      <ul>
        {image && image.map(img => (
          <li key={img.id}>
            <span>Hello</span>
            <Image src={`/uploads/${img.filename}`} height={100} width={100} alt='image' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Images