import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import AddAttendee from './components/AddAttendee';
import Home from './components/Home';



function App() {
  return (
<Router>
<div className="app">
  <NavBar />
  <Routes>
    <Route path="/"exact element={<Home />}/>
    <Route path="/addAttendee" element={<AddAttendee />}/>
    <Route path="/contact" element={<Contact />}/> 
  </Routes>
</div>
</Router>
    
  );
}

export default App;
