import React from 'react';
import Home from './pages/Home';
import ListRedirection from './components/ListRedirection';
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css';



function App() {

  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/gifs/:keyword' element={<ListRedirection/>}  />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
