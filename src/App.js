import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <div>
        <Routes>
          <Route path='/' element={<Home/>} />   

        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App