import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'
import Footer from '../Components/Footer'
import booklist from "../assets/data/boolklist.json"

const Home = () => {
    return (
        <div className="bg-zinc-600 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            <hr className="border-zinc-500" />

            {/* Main Content */}
            <div className="bg-zinc-300 flex flex-col p-6 gap-10 text-zinc-800">
                {/* Featured Books Section */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">Featured Books</h1>
                    <hr className="border-zinc-500 mb-4" />
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {booklist.filter((book) => book.isFeatured === true).map((book) => (
                            <div
                                key={book.id}
                                className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition"
                            >
                                <h2 className="text-xl font-semibold">{book.bookName}</h2>
                                <p className="text-sm text-zinc-600">by {book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trending Books Section */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">Trending Books</h1>
                    <hr className="border-zinc-500 mb-4" />
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {booklist.filter((book) => book.isTrending === true).map((book) => (
                            <div
                                key={book.id}
                                className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition"
                            >
                                <h2 className="text-xl font-semibold">{book.bookName}</h2>
                                <p className="text-sm text-zinc-600">by {book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home