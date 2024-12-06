import { createContext, useState } from "react";

const ReviewContext = createContext({})

const ReviewProvider = ({ children }) => {
    const [booknum, setbooknum] = useState("")

    return (
        <ReviewContext.Provider value={{ booknum, setbooknum }}>
            {children}
        </ReviewContext.Provider>
    )
}

export { ReviewContext, ReviewProvider }