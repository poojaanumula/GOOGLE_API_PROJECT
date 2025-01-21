
import React, { useState } from "react";
import Classes from "./BookTitle.module.scss";
import BookDetails from "../BookDetails/BookDetails";

const BookTitle = ({ data }) => {
  const [modalState, setModalState] = useState(false);

  const modalOpen = () => setModalState(true);
  const modalClose = () => setModalState(false);

  return (
    <>
      <article className={Classes.card}>
        <h3 className={Classes.h3} title={data.volumeInfo.title}>
          {data.volumeInfo.title.length > 30
            ? `${data.volumeInfo.title.slice(0, 30)}...`
            : data.volumeInfo.title}
        </h3>
        <img
          src={data.volumeInfo.imageLinks?.thumbnail}
          className={Classes.image}
        />
        <h4
          style={{
            padding: "5px",
            margin: "0",
            alignSelf: "center",
            fontSize: "12px",
          }}
        >
          <b>Author: </b>
              {data.volumeInfo.authors ? data.volumeInfo.authors[0] : "Author does not exist"}
        </h4>
      
        <button onClick={modalOpen} className={Classes.btn}>
          Read More...
        </button>
      </article>

      {/* Modal Implementation */}
      <div
        className={Classes.modalOverlay}
        style={{ display: modalState ? "block" : "none" }}
        onClick={modalClose}
      >
        <div className={Classes.modalContent}>
          <button className={Classes.closeButton} onClick={modalClose}>
            X
          </button>
          <BookDetails bookId={data.id} />
        </div>
      </div>
    </>
  );
};

export default BookTitle;
