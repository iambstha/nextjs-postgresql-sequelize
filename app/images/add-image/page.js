"use client"
import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile)
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
        console.log(file)
      try {
        const formData = new FormData();
        formData.append('image', file);

        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
          }
    

        // Send the form data to the API route for image upload
        const response = await fetch('http://localhost:3000/api/image', {
          method: 'POST',
          body: formData,
          headers: {
            // 'Content-type': 'application/json'
            'Accept': 'application/json',
          }
        });

        console.log(response)

        if (response.ok) {
          console.log('Image uploaded successfully');
        } else {
          console.error('Error uploading image');
        }
      } catch (error) {
        console.error('Error uploading image', error);
      }
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} className=' border p-2 px-4 ' />
        <button type="submit" className=' border-blue-500 bg-blue-500 p-2 px-4 text-white '>Upload</button>
      </form>
    </div>
  );
};

export default ImageUploadForm;
