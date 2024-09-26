import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Books from './Components/Books/Books'
import Book from './Components/Book/Book'
import NewBook from './Components/New/NewBook'
import EditBook from './Components/Edit/Edit'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/books" element={<Books />}/>
        <Route path="/books/new" element={<NewBook />} />
        <Route path="/books/:id" element={<Book />}/>
        <Route path="/books/:id/edit" element={<EditBook />} />
      </Routes>
    </div>
  )
}

export default App;
