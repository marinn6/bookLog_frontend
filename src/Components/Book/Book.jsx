import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../Book/Book.css'

const Book = () => {
    const API = import.meta.env.VITE_BASE_URL;
    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("Fetching book with ID:", id);
        fetch(`${API}/books/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setBook(res);
            })
            .catch(err => console.error(err));
    }, [id, API]);

    const handleDelete = () => {
        fetch(`${API}/books/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error("Failed to Delete Book");
            }
            return res.json();
        })
        .then(() => navigate("/books"))
        .catch((error) => console.error(error));
    };

    return (
        <div className='book-page'>
        <div className="book-container">
            <div className="book-container-left">
                <img src={`http://localhost:3002/public/${book.book_cover_img}`} alt="" 
            />
            </div>
            <div className="book-container-right">
                <h2>{book.title}</h2>
                <p>Id: {book.id}</p>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Total Pages:</strong> {book.total_pages}</p>
                <p><strong>Year Published:</strong> {book.year_published}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Is Favorite:</strong> {book.is_favorite ? 'Yes' : 'No'}</p>
                <p><strong>Book Status:</strong> {book.book_status}</p>
                <div className='button-container'>
                <button className='button-edit'>
                    <Link className ="edit"to={`/books/${id}/edit`}>Edit</Link>
                </button>
                <button className="button-delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Book;