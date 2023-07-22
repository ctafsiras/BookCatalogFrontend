/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BookCard } from "../components/BookCard";
import Loading from "../components/Loading";
import { useGetBooksQuery } from "../redux/features/book/bookEndpoint";
import { useState } from "react";
import { IBook } from "../types/book";

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className="px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-4">All Books</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title, author, or genre"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
      {/* <FilterOptions onFilter={onFilter} /> */}
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data
          ?.filter((book: { title: string }) =>
            book?.title?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book: IBook, i: number) => (
            <BookCard key={i} book={book} />
          ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
