import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../New/NewBook.css'
const NewBook = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        total_pages: '',
        year_published: '',
        isbn: '',
        is_favorite: false,
        book_status: 'Want To Read',
    });

    const addBook = () => {
    const API = import.meta.env.VITE_BASE_URL;
        fetch(`${API}/books`, {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok")
            }
            return res.json()
        })
        .then(() => navigate("/books"))
        .catch((err) => console.error("Error adding book:", err))
    };

    const handleChange = (e) => {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)
        // console.log(e.target.value)
        //prevState is whatever is inside the form at that time
        setBook((prevState) => {
            //used to update the key but also brings the rest of info, target=input.property=id
            return { ...prevState, [e.target.id]: e.target.value}
        })
    };

    const handleSelect = (e) => {
        setBook((prevState) => {
            return {...prevState, book_status: e.target.value}
        })
    };

    const handleCheckBox = (e) => {
        setBook((prevState) => {
            return {...prevState, is_favorite: !book.is_favorite }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook()
    };

    
  return (
    <div className='form-page'>
        <div className='form-card'>
        <fieldset>
            <legend>New Book</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="title" 
                    value={book.title} 
                    onChange={handleChange} 
                />
                <br />

                <label htmlFor="author">Author:</label>
                <input  
                type="text" 
                id="author" 
                placeholder="author" 
                value={book.author} 
                onChange={handleChange} 
                />
                <br />

                <label htmlFor="genre">Genre:</label>
                <input  
                    type="text" 
                    id="genre" 
                    placeholder="genre" 
                    value={book.genre} 
                    onChange={handleChange} 
                />
                <br />

                <label htmlFor="total_pages">Total Pages:</label>
                <input 
                    type="text" 
                    id="total_pages" 
                    placeholder="ex. 362" 
                    value={book.total_pages}  
                    onChange={handleChange} 
                />
                <br />

                <label htmlFor="year_published">Year Published:</label>
                <input 
                    type="text" 
                    id="year_published" 
                    placeholder="ex. 2000" 
                    value={book.year_published} 
                    onChange={handleChange} 
                />
                <br />

                <label htmlFor="isbn">ISBN #:</label>
                <input 
                    type="text" 
                    id="isbn" 
                    placeholder="ex. 00000000000000"
                    value={book.isbn}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="is_favorite">Favorite:</label>
                <input 
                    type="checkbox" 
                    id="is_favorite" 
                    checked={book.is_favorite} 
                    onChange={handleCheckBox}
                />
                <br />

                <label htmlFor="book_status">Book Status:</label>
                <select 
                    id="book_status" 
                    name="book_status" 
                    value={book.book_status} 
                    onChange={handleSelect}>
                    <option value="READ">Read</option>
                    <option value="Want To Read">Want To Read</option>
                    <option value="DNF">Did Not Finish</option>
                </select>
                <br />

                <button type="submit">Add Book</button>
            </form>
        </fieldset>
        </div>
     </div>
  )
}

export default NewBook;