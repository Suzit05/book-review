import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import booklist from "../assets/data/boolklist.json"
import ReviewCard from '../Components/ReviewCard'
import { ReviewContext, ReviewProvider } from '../Context/ReviewContext'


const Bookdetail = () => {
    const { booknum, setbooknum } = useContext(ReviewContext)
    const { bookid } = useParams()
    const currentbook = booklist.filter((book) => book.id == bookid)
    setbooknum(bookid);
    console.log("book number=", booknum)

    return (
        <div className='bg-zinc-600 w-full h-[100vh]'><Navbar></Navbar>
            <hr />
            <div className='flex-col justify-center text-xl'>Bookdetail for  {bookid}:
                <h1 className='text-red-400' >{currentbook[0].bookName}</h1>
                <h1 className='text-green-400'>{currentbook[0].author}</h1>
                <h1 className='text-yellow-200'>{currentbook[0].rating}</h1>
                <ReviewCard></ReviewCard>

            </div>

        </div>

    )
}

export default Bookdetail