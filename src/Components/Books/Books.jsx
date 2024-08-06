import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
    <div>
        { books.map((book, i) => {
            return (
                <div key={i}> 
                    <Link to={`/books/${i}`}>{book.title}</Link>
                </div>
                )
            })
        }
    </div>
  );
};

export default Books;