/* eslint-disable @typescript-eslint/no-misused-promises */
import { useMarkCompleteMutation } from "../redux/features/user/userEndpoint";
import { useAppSelector } from "../redux/hooks";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.user);
  const [markComplete] = useMarkCompleteMutation();
  const handleComplete = async (bookId: string) => {
    const result = await markComplete({ userId: user!.id, bookId });
    if ("data" in result) {
      toast("Book Completed successfully");
    } else {
      toast.error("Book Completed failed");
    }
    //toast file here
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      {user && (
        <div className="mb-4">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">user.WishList</h2>
        {user!.wishList!.length > 0 ? (
          <ul>
            {user?.wishList?.map((book: string, i: number) => (
              <li key={i}>
                {i + 1}. {book}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books in the user.wishList</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Reading List</h2>
        {user!.readingList.length > 0 ? (
          <ul>
            {user!.readingList.map(
              (book: { bookId: string; finished: boolean }, i: number) => (
                <li className="m-2" key={i}>
                  {i + 1}. {book.bookId}{" "}
                  {book.finished ? (
                    <span className="bg-green-400 p-1 m-1 rounded-md">
                      Finished
                    </span>
                  ) : (
                    <span className="bg-yellow-400 p-1 m-1 rounded-md">
                      Running
                      <span
                        className="bg-blue-500 m-1 p-1 text-white text-sm rounded-2xl cursor-pointer"
                        onClick={() => handleComplete(book.bookId)}
                      >
                        Mark Complete
                      </span>
                    </span>
                  )}
                </li>
              )
            )}
          </ul>
        ) : (
          <p>No books in the reading list</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
