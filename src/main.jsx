import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext, AuthProvider } from './Context/AuthContext.jsx'
import { BookContext, BookProvider } from './Context/BookContext.jsx'
import { ReviewProvider } from './Context/ReviewContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookProvider>
        <ReviewProvider>
          <App />
        </ReviewProvider>

      </BookProvider>

    </AuthProvider>

  </StrictMode>,
)
