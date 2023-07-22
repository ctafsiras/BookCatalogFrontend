import { BookCard } from "../components/BookCard";
import FilterOptions from "../components/FilterOptions";
import SearchBar from "../components/SearchBar";

const books = [
  {
    name: "Harbarkl",
    author: "jflsdkjfl",
    publicationYear: 2043,
    genre: "fkdsj",
  },
  {
    name: "Harbarkl",
    author: "jflsdkjfl",
    publicationYear: 2043,
    genre: "fkdsj",
  },
  {
    name: "Harbarkl",
    author: "jflsdkjfl",
    publicationYear: 2043,
    genre: "fkdsj",
  },
  {
    name: "Harbarkl",
    author: "jflsdkjfl",
    publicationYear: 2043,
    genre: "fkdsj",
  },
  {
    name: "Harbarkl",
    author: "jflsdkjfl",
    publicationYear: 2043,
    genre: "fkdsj",
  },
];

const AllBooksPage = () => {
  const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };
  const onFilter = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <div className="px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-4">All Books</h1>
      <SearchBar onSearch={onSearch} />
      <FilterOptions onFilter={onFilter} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
