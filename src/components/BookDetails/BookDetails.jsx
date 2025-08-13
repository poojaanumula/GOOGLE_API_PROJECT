
import React, { useEffect, useState } from 'react';
import Classes from './BookDetails.module.scss';

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyBoqST_mho9lI5gzDMUABBuy4L9njhfEe8`
        );
        if (!res.ok) {
          throw new Error(`Sorry, unable to fetch book details`);
        }
        const data = await res.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchBookDetails();
  }, [bookId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }
  const { volumeInfo } = book;
  return (
    <div className={Classes.article}>
      <h3 className={Classes.title}>{volumeInfo.title}</h3>
      <hr className={Classes.line} />
      <p className={Classes.title}>
        <b>Categories:</b> {volumeInfo.categories}
      </p>
      <p className={Classes.title}>
        <b>Publisher:</b> {volumeInfo.publisher}
      </p>
      <p className={Classes.title}>
        <b>Authors:</b> {volumeInfo.authors?.join(', ')}
      </p>
      <p className={Classes.title}>
        <b>Language:</b> {volumeInfo.language==='en'? "English":" "}
      </p>
      <p className={Classes.title}>
      <b>Description:</b>  {volumeInfo.description ? 
        volumeInfo.description.slice(0, 100) :
       "No description available"}
      </p>
    </div>
  );
};

export default BookDetails;
