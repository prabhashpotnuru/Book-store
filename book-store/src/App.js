//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Head from "./components/Head";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetail from './components/Book/BookDetail';
//import bookworm from './bookworm.jpeg';
function App() {
  return <React.Fragment>
    <header>
      <Head/>
    </header>
    <main>
      
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<AddBook/>} exact/>
        <Route path="/books" element={<Books/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/books/:id" element={<BookDetail/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
};

export default App;
