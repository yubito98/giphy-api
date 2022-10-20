import React from 'react';
import Home from './pages/Home';
import ListRedirection from './components/ListRedirection';
import GifDetail from './pages/GifDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/giphy-api' element={<Home/>} />
            <Route path='/giphy-api/gifs/:keyword' element={<ListRedirection/>}  />
            <Route path='/giphy-api/detail/:id' element={<GifDetail/>}  />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
