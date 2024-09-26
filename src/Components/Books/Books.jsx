import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Books/Books.css'


const Books = () => {
    const API = import.meta.env.VITE_BASE_URL;
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API}/books`)
            .then(res => res.json())
            .then(res => {
                setBooks(res)
            })
            .catch(err => console.error(err))

    }, [])

  return (
    <div className='books-container'>
        { books.map((book, index) => {
            return (
                <div key={book.id} className="book-item"> 
                    <Link to={`/books/${book.id}`} className="book-link">{book.title}</Link>
                    <img className='book-cover' src={`http://localhost:3002/public/${book.book_cover_img}`} alt="book cover img" />

                </div>
                )
            })
        }
    </div>
  );
};

export default Books;