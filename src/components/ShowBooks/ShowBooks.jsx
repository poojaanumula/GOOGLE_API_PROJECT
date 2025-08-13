

import React, { useContext, useEffect, useState } from "react";
import { SearchTerm } from "../Header/Header";
import BookCard from "../BookCard/BookCard";
import Classes from './ShowBooks.module.scss'

const ShowBooks = () => {
  const { updatedInput } = useContext(SearchTerm);
  const [finalres, setFinalRes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (updatedInput.trim() === "") {
      setFinalRes([]);
      setError(null);
      setLoading(false);
      return;
    }

    const getBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${updatedInput}&key=AIzaSyBoqST_mho9lI5gzDMUABBuy4L9njhfEe8`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch data`);
        }
        const result = await res.json();

        // Filter books whose title matches the search term
        const matchedBooks = result.items?.filter((book) =>
          book.volumeInfo.title.toLowerCase().includes(updatedInput.toLowerCase())
        );

        if (matchedBooks && matchedBooks.length > 0) {
          setFinalRes(matchedBooks); // Books found
        } else {
          setFinalRes([]); // No matching books
        }

        setError(null);
      } catch (err) {
        setError(err.message);
        setFinalRes([]);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [updatedInput]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && updatedInput && finalres.length === 0 && !error && (
        <p className={Classes.bookNotFound}>
          The book "{updatedInput}" was not found.
        </p>
      )}
      {!loading && finalres.length > 0 && <BookCard books={finalres} />}
      {!loading && error && <p>Error: {error}</p>}
    </div>
  );
};

export default ShowBooks;

