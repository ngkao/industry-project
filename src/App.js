import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ScoresPage from './pages/ScoresPage/ScoresPage';


function App() {
  return (


    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={HomePage}  />
            <Route path={"/scores"} element={ScoresPage}  />
       
            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
