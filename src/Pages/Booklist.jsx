import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import BookCard from '../Components/BookCard'
import booklist from "../assets/data/boolklist.json"
import Footer from '../Components/Footer'
import Filter from '../Components/Filter'
import { BookContext } from '../Context/BookContext'

const Booklist = () => {
    const { filteredBooks } = useContext(BookContext)
    return (

        <div className='bg-zinc-600' > <Navbar></Navbar>
            <hr />
            <Filter></Filter>
            <div className='ml-[37%] mt-6 mb-8' >

                {filteredBooks.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}</div>
            <Footer></Footer>
        </div>

    )
}

export default Booklist