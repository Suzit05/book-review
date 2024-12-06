import { createContext, useState } from "react";
import booklist from "../assets/data/boolklist.json"

const BookContext = createContext({})

const BookProvider = ({ children }) => {
    const [isFiltered, setisFiltered] = useState(false)
    const [filteredBooks, setfilteredBooks] = useState(booklist)



    return (
        < BookContext.Provider value={{ isFiltered, setisFiltered, filteredBooks, setfilteredBooks }} >
            {children}
        </BookContext.Provider >
    )

}

export { BookContext, BookProvider }