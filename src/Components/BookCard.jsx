import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({ book }) => {
    return (

        <div className="bg-white mb-4 shadow-lg rounded-lg p-6 max-w-sm border border-gray-200">
            <h3 key={book.id} className="text-lg font-semibold text-gray-800 mb-2">{book.bookName}</h3>
            <p className="text-gray-600 mb-2">
                <span className="font-medium">Author:</span>{book.author}
            </p>
            <p className="text-gray-600">
                <span className="font-medium">Rating:</span>{book.rating}⭐
            </p>
            <Link to={`/Bookdetail/${book.id}`}>Book details</Link>
           
        </div>
    )
}

export default BookCard