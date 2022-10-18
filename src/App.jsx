import React from 'react';
import Home from './pages/Home';
import ListRedirection from './components/ListRedirection';
import { Route } from 'wouter';
import './App.css';



function App() {

  return (
    <div className="App">
      <Route path='/' component={Home} />
      <Route path='/gifs/:keyword' component={ListRedirection}  />
    </div>
  );
}

export default App;
