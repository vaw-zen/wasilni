import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import React, { Profiler, useEffect } from 'react'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from "./pages/Profile"

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
