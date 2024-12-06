import React, { useContext, useRef, useState } from 'react'
import booklist from "../assets/data/boolklist.json"
import { ReviewContext } from '../Context/ReviewContext'

const ReviewCard = () => {
    const { booknum, setbooknum } = useContext(ReviewContext)

    const nameRef = useRef();
    const ratingRef = useRef();
    const reviewRef = useRef();
    const [booklistdata, setbooklistdata] = useState(booklist)
    const reviewAddHandler = () => {
        const newReview = {
            user: (nameRef.current.value),
            comment: (reviewRef.current.value),
            rating: (Number(ratingRef.current.value)),
        }
        //target book ko update kr rahe hai
        const updatedBookList = booklistdata.map((book) => String(book.id) === String(booknum) ? { ...book, reviews: [...book.reviews, newReview] } : book)
        setbooklistdata(updatedBookList);
        console.log(booklistdata)

        //clear data
        nameRef.current.value = '';
        ratingRef.current.value = '';
        reviewRef.current.value = '';

    }



    return (
        <div className="bg-zinc-700 w-full min-h-screen p-4 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Book Reviews</h1>
            <div className="space-y-6">{booklistdata.filter((book) => String(book.id) === String(booknum)).map((book) => (
                <div key={book.id} className="p-6 bg-zinc-800 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-yellow-400">
                        {book.bookName}
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">{book.author}</p>
                    <div className="space-y-4">
                        {book.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="p-4 bg-zinc-900 border border-zinc-600 rounded-lg shadow"
                            >
                                <h3 className="text-lg font-medium text-blue-300">
                                    {review.user}
                                </h3>
                                <p className="text-sm text-gray-300">{review.comment}</p>
                                <p className="text-yellow-500 font-semibold">
                                    Rating: {review.rating} / 5
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Add Review Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Add a Review</h3>

                        {/* Name Input */}
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Rating Input */}
                        <select ref={ratingRef}
                            className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled >
                                Select Rating
                            </option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>

                        {/* Review Textarea */}
                        <textarea
                            ref={reviewRef}
                            placeholder="Write your review here..."
                            className="w-full p-3 bg-zinc-900 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        {/* Submit Button */}
                        <div className="mt-4 flex justify-end">
                            <button onClick={reviewAddHandler} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                                Add Review
                            </button>
                        </div>
                    </div>

                </div>
            ))}
            </div>
        </div>
    )
}

export default ReviewCard