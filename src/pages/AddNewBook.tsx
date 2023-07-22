/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/components/AddNewBook.js

import { useState } from "react";
import { useAddBookMutation } from "../redux/features/book/bookEndpoint";
import { toast } from "react-toastify";

const AddNewBook = () => {
  const [addBook] = useAddBookMutation();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publicationYear: "",
    genre: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // You can implement API call or state management logic here
    console.log("New Book Data:", bookData);
    const result = await addBook(bookData);
    if ("data" in result) {
      toast("Book added successfully!");
      setBookData({
        title: "",
        author: "",
        publicationYear: "",
        genre: "",
      });
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center md:min-w-full">
      <h1 className="text-4xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
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
