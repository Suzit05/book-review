import React, { useContext, useEffect, useRef, useState } from 'react'
import booklist from "../assets/data/boolklist.json"
import { BookContext } from '../Context/BookContext'

const Filter = () => {
    const { isFiltered, setisFiltered, setfilteredBooks } = useContext(BookContext)

    const [selectedGenre, setselectedGenre] = useState("")
    const [searchQuery, setsearchQuery] = useState("")
    const filterUpdate = (e) => {
        setselectedGenre(e.target.value)

    }


    //to find from search area
    const bookRef = useRef();
    const findButtonHandler = () => {
        const bookinput = bookRef.current.value.trim().toLowerCase();

        setsearchQuery(bookinput);
        bookRef.current.value = "";

    }

    useEffect(() => {
        const filtered = booklist.filter((book) => {
            const matchesGenre = selectedGenre ? book.genres.includes(selectedGenre) : true;
            const matchessearchQuery = searchQuery ? book.bookName.toLowerCase().includes(searchQuery) : true;
            return matchesGenre && matchessearchQuery;
        })
        setfilteredBooks(filtered);
        setisFiltered(filtered.length < booklist.length); // Set filtered state
    }, [selectedGenre, searchQuery, setfilteredBooks, setisFiltered]);





    return (
        <div className="p-6 bg-zinc-700 text-white rounded-lg shadow-md space-y-4">
            <div className="flex items-center gap-4">
                <textarea
                    ref={bookRef}
                    name="search"
                    placeholder="Enter book name"
                    id=""
                    className="w-full p-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button onClick={findButtonHandler} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                    Find
                </button>
            </div>
            <div>
                <select onChange={filterUpdate}
                    name="genre"
                    id=""
                    className="w-full p-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Fictional">Fictional</option>
                    <option value="Non-Fictional">Non-Fictional</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                    <option value="Highest Rated">Highest Rated</option>
                    <option value="Lowest Rated">Lowest Rated</option>
                </select>
            </div>
        </div>
    )
}

export default Filter