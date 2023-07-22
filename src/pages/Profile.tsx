// src/components/ProfilePage.js

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchUserData, fetchWishlist, fetchReadingList } from "../api";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [readingList, setReadingList] = useState([]);

  // Fetch user data using RTK Query or any other data fetching method
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useQuery("userData", fetchUserData);

  // Fetch wishlist and reading list using RTK Query or any other data fetching method
  const {
    data: wishlistData,
    isLoading: wishlistLoading,
    isError: wishlistError,
  } = useQuery("wishlist", fetchWishlist);
  const {
    data: readingListData,
    isLoading: readingListLoading,
    isError: readingListError,
  } = useQuery("readingList", fetchReadingList);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  useEffect(() => {
    if (wishlistData) {
      setWishlist(wishlistData);
    }
  }, [wishlistData]);

  useEffect(() => {
    if (readingListData) {
      setReadingList(readingListData);
    }
  }, [readingListData]);

  if (userLoading || wishlistLoading || readingListLoading)
    return <div>Loading...</div>;
  if (userError || wishlistError || readingListError)
    return <div>Error fetching data.</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      {userData && (
        <div className="mb-4">
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Wishlist</h2>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        ) : (
          <p>No books in the wishlist</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Reading List</h2>
        {readingList.length > 0 ? (
          <ul>
            {readingList.map((book) => (
              <li key={book.id}>
                {book.title} {book.isFinished ? "(Finished)" : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books in the reading list</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
