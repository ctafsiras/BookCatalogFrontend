/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useGetSingleBookQuery} from '../redux/features/book/bookEndpoint';

const EditBook = () => {
  const { id } = useParams();

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
  });

  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  // Use useEffect to update the form with fetched book data
  useEffect(() => {
    if (data.data) {
      setBookData({
        title: data?.data.title,
        author: data?.data.author,
        genre: data?.data.genre,
        publicationYear: data?.data.publicationDate,
      });
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Implement update book logic using RTK Query or any other method
    // Example: updateBook(bookId, bookData).then(() => history.push(`/book/${bookId}`));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching book details.</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleUpdate} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title:</label>
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
          <label htmlFor="author" className="block mb-1">Author:</label>
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
          <label htmlFor="genre" className="block mb-1">Genre:</label>
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
        <div className="mb-4">
          <label htmlFor="publicationDate" className="block mb-1">Publication Date:</label>
          <input
            type="text"
            id="publicationDate"
            name="publicationDate"
            value={bookData.publicationDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
