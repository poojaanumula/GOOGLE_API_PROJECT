import React from 'react'
import BookTitle from '../BookTitle/BookTitle'
import Classes from './BookCard.module.scss'

const BookCard = ({books}) => {
    return (
      <div className={Classes.card_display}>
        {books.map((book) => (
          <BookTitle key={book.id} data={book} />
        ))}
      </div>
    )

}

export default BookCard
