import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/:movieId" element={<Movie/>} />
        </Routes>
        <GlobalStyle />
    </>
)

export default App;
