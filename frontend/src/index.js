import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';


import Home from './pages/home/Home';

// import SignIn from './pages/signin/SignIn';
// import SignUp from './pages/signup/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route path='/' element={<Home />} exact/>
        {/* <Route path='/about' element={<About />} /> */}

        {/* <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/> */}

      </Routes>
    </Router>
    
  </React.StrictMode>
);


