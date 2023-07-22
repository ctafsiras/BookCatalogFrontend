import { BookCard } from "../components/BookCard";
import FilterOptions from "../components/FilterOptions";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import { useGetBooksQuery } from "../redux/features/book/bookEndpoint";
import { useState } from "react";

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isError, data, isLoading } = useGetBooksQuery(undefined);
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };
  const onFilter = (searchTerm) => {
    console.log(searchTerm);
  };

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
      <FilterOptions onFilter={onFilter} />
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data
          ?.filter((book) => book?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
