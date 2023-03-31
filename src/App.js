import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ScoresPage from './pages/Scores/ScoresPage';
import TopNav from './components/topnav/Topnav';
import React, { useState } from 'react';

function App() {
  // const HomeMenu = () {
  //   "title": "NFLF",
  //   "TOP",
  //   "NFL",
  //   "NBA",
  //   "NCAAF",
  //   "MLB",
  //   "NHL"
  // }
  const [defaultMenu, setDefaultMenu] = useState("NFLF");
  const [scoreMenu, setScoreMenu] = useState("Score Menu");


  return (
    <BrowserRouter> 
        <TopNav />
        <Routes>
            <Route path={"/"} element={<HomePage />}   />
            <Route path={"/scores"} element={<ScoresPage />}  />

            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
