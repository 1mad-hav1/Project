import logo from './logo.svg';
import './App.css';
import { TextField, Typography } from '@mui/material';
import Frst from './components/Frst';
import Nav from './components/Nav';
import StateBasics from './components/StateBasics';
import { useState } from 'react';
import Home from './components/Home';
import APIGet from './components/APIGet';
import { Route, Routes } from 'react-router-dom';
import Table1 from './components/Table1';

function App() {
  return (
    <div className="App">
     <Nav/>
      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/Frst' element={<Frst/>}/>
        <Route path='/Table1' element={<Table1/>}/>
        <Route path='/axios' element={<APIGet/>}/>
      </Routes>
    </div>
  );
}

export default App;
