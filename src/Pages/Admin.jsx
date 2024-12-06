import React from 'react'
import Navbar from '../Components/Navbar'
import users from "../assets/data/users.json"
import booklist from '../assets/data/boolklist.json'
import Footer from '../Components/Footer'

const Admin = () => {
    return (
        <div className="bg-zinc-600 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            <hr className="border-zinc-500 my-4" />

            {/* Users Section */}
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">Users Email:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="p-4 bg-zinc-700 rounded-md shadow-md hover:bg-zinc-800 transition"
                        >
                            <h2 className="text-lg font-semibold">{user.email}</h2>
                        </div>
                    ))}
                </div>

                <hr className="border-zinc-500 my-8" />

                {/* Booklist Section */}
                <h1 className="text-2xl font-bold mb-6 ">Books List:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {booklist.map((book, index) => (
                        <div
                            key={index}
                            className="p-4 bg-zinc-700 rounded-md shadow-md hover:bg-zinc-800 transition"
                        >
                            <h2 className="text-lg font-semibold">{book.bookName}</h2>
                            <p className="text-sm text-gray-400">by {book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Admin