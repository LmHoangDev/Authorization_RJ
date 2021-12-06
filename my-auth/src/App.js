import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Redirect from="/home" to="/" exact />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Routes>
     
    </div>
  );
}
export default App;
