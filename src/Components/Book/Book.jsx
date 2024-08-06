import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Book = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [book, setBook] = useState(null)
    const { id } = useParams() 
    
    useEffect(() => {
        fetch(`${API}/books/${id}`)
            .then(res => res.json())
            .then(res => {
                //console.log(res)
                setBook(res)
            })
            .catch(err => console.error(err))
    }, [])

  return (
    <div>
        { book && 
            <div>
                <h2>{book.title}</h2>
                <a href={book.url} target="_blank">Take me there</a>
            </div>}
            <Link to={`/books/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default Book;