/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import {
  useAddToReadingListMutation,
  useAddToWishListMutation,
} from "../redux/features/user/userEndpoint";
import { toast } from "react-toastify";
import { IBook } from "../types/book";

export function BookCard({ book }: { book: IBook }) {
  const { user } = useAppSelector((state) => state.user);
  const [addToReadingList] = useAddToReadingListMutation();
  const [addToWishList] = useAddToWishListMutation();
  const navigate = useNavigate();
  const handleWishList = async (id: string) => {
    const result = await addToWishList({ userId: user?.id, bookId: id });
    if (result.data) {
      toast("Book added to wish list successfully");
    } else {
      toast.error("Book added to wish list failed");
    }
  };
  const handleReadList = async (id: string) => {
    const result = await addToReadingList({ userId: user.id, bookId: id });
    if (result.data) {
      toast("Book added to wish list successfully");
    } else {
      toast.error("Book added to wish list failed");
    }
  };
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {book.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className="mt-4">
          <p className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Author #{book.author}
          </p>

          <p className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Publication Year #{book.publicationYear}
          </p>

          <p className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            Genre #{book.genre}
          </p>
        </div>
        <div className="flex justify-between gap-2">
          <button
            type="button"
            onClick={() => navigate(`/book/${book?.id}`)}
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Details
          </button>
          {user && (
            <>
              <button
                type="button"
                onClick={() => handleWishList(book?.title)}
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to wish List
              </button>
              <button
                type="button"
                onClick={() => handleReadList(book?.title)}
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to read
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
