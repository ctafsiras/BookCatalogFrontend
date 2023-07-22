// src/components/AddNewBook.js

import React, { useState } from "react";

const AddNewBook = () => {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    publicationYear: "",
    genre: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement API call or state management logic here
    console.log("New Book Data:", bookData);
    // Reset the form after submission
    setBookData({
      name: "",
      author: "",
      publicationYear: "",
      genre: "",
    });
  };

  return (
    <div className="flex flex-col items-center md:min-w-full">
      <h1 className="text-4xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block mb-1">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publicationYear" className="block mb-1">
            Publication Year:
          </label>
          <input
            type="number"
            id="publicationYear"
            name="publicationYear"
            value={bookData.publicationYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block mb-1">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
