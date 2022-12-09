import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Logout from './pages/Logout/Logout';
import Books from './components/Books/Books';
import Footer from './components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "books" element = {<Books />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/logout' element={<Logout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

