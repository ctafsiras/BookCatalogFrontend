// src/components/BookDetails.js

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchBookDetails } from "../api";

const BookDetails = () => {
  const { bookId } = useParams();
  const history = useHistory();

  // Fetch book details using RTK Query or any other data fetching method
  const {
    data: book,
    isLoading,
    isError,
  } = useQuery(["book", bookId], () => fetchBookDetails(bookId));

  const handleEdit = () => {
    // Redirect to the Edit Book page with the bookId as a parameter
    history.push(`/edit-book/${bookId}`);
  };

  const handleDelete = () => {
    // Show confirmation dialogue and delete the book if confirmed
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      // Implement delete book logic using RTK Query or any other method
      // After deletion, redirect to the All Books page
      // Example: deleteBook(bookId).then(() => history.push('/'));
    }
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    // Implement review submission logic using RTK Query or any other method
    // Example: submitReview(bookId, reviewData);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching book details.</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Book Details</h1>
      <div>
        <p>
          <strong>Title:</strong> {book.title}
        </p>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Publication Date:</strong> {book.publicationDate}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        {/* Display book reviews here */}
        {book.reviews.map((review) => (
          <div key={review.id} className="mb-2">
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      {/* Add review submission form for authenticated users */}
      {/* Implement authentication logic and display the form conditionally */}
      {authenticatedUser && (
        <form onSubmit={handleSubmitReview} className="mt-4">
          <textarea
            rows="4"
            placeholder="Write your review..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      )}
      {/* Add Edit and Delete buttons for authenticated users */}
      {/* Implement authentication logic and display the buttons conditionally */}
      {authenticatedUser && (
        <div className="mt-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Edit Book
          </button>
          <button
            onClick={handleDelete}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Delete Book
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
