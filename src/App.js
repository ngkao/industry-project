import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ScoresPage from './pages/Scores/ScoresPage';

import React from 'react';
import BetPage from './pages/Bet/BetPage';

function App() {
  return (
    <BrowserRouter> 
        {/* <TopNav /> */}
        <Routes>
            <Route path={"/"} element={<HomePage />}   />
            <Route path={"/scores"} element={<ScoresPage />}  />
            <Route path={"/bet"} element={<BetPage />}  />

            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
