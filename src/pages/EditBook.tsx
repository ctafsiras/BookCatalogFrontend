/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookEndpoint";
import { toast } from "react-toastify";

const EditBook = () => {
  const { id } = useParams();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
  });
  const [updateBook] = useUpdateBookMutation();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  // Use useEffect to update the form with fetched book data
  useEffect(() => {
    if (data?.data) {
      setBookData({
        title: data?.data.title,
        author: data?.data.author,
        genre: data?.data.genre,
        publicationYear: data?.data.publicationYear,
      });
    }
  }, [data]);

  const handleChange = (event: {target: {name: any; value: any;};}) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: {preventDefault: () => void;}) => {
    e.preventDefault()
    const result = await updateBook({ id, book: bookData });
    if ("data" in result) {
      toast("Book updated successfully");
    } else {
      toast("Book updated failed");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching book details.</div>;

  return (
   <div className="flex justify-center">
     <div className="">
      <h1 className="text-4xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleUpdate} className="max-w-md">
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
        <div className="mb-4">
          <label htmlFor="publicationYear" className="block mb-1">
            Publication Date:
          </label>
          <input
            type="text"
            id="publicationYear"
            name="publicationYear"
            value={bookData.publicationYear}
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
   </div>
  );
};

export default EditBook;
