import { createContext, useState } from "react";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [isloggedin, setisloggedin] = useState(false)

    

    return (
        <AuthContext.Provider value={{ isloggedin, setisloggedin }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }