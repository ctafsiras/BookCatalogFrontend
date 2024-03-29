/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/book/bookEndpoint";
import Loading from "../components/Loading";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-toastify";
import { useState } from "react";
const BookDetails = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const [reviewText, setReviewText] = useState("");
  const { data, refetch, isLoading } = useGetSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const [addReview] = useAddReviewMutation();
  const handleEdit = () => {
    // history.push(`/edit-book/${bookId}`);
    navigate(`/edit-book/${id!}`);
  };
  console.log(data);
  const handleDelete = async () => {
    // Show confirmation dialogue and delete the book if confirmed
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      const result = await deleteBook(id!);
      if ("data" in result) {
        toast("Book deleted successfully");
        navigate("/");
      }
    }
  };
  console.log(reviewText);

  const handleSubmitReview = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const result = await addReview({ id, review: reviewText });
    if ("data" in result) {
      toast("Review added successfully");
      setReviewText("");
      await refetch();
    }
  };

  if (isLoading) return <Loading />;
  // if (isError) return <div>Error fetching book details.</div>;

  return (
    <div className="mx-16">
      <h1 className="text-4xl font-bold mb-4">Book Details</h1>
      <div>
        <p>
          <strong>Title:</strong> {data?.data.title}
        </p>
        <p>
          <strong>Author:</strong> {data?.data.author}
        </p>
        <p>
          <strong>Genre:</strong> {data?.data.genre}
        </p>
        <p>
          <strong>Publication Date:</strong> {data?.data.publicationYear}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        {/* Display book reviews here */}
        {data?.data.reviews.map((review: string, i: number) => (
          <div key={i} className="mb-2">
            <p>
              {i + 1}. {review}
            </p>
          </div>
        ))}
      </div>
      {/* Add review submission form for authenticated users */}
      {/* Implement authentication logic and display the form conditionally */}
      {user && (
        <form onSubmit={handleSubmitReview} className="mt-4">
          <textarea
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
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
      {user && (
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
