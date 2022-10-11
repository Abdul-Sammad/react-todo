import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './comp/todo';
import Login from './comp/login';
import Signup from './comp/singup';
import ProtectedRoute from "./ProtectedRoute";


function App () {
    return(
        <>
        <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Todo" element={<Todo />}></Route>
        
        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<Todo />}></Route>
          </Route>
      </Routes>
      </Router>
        </>
    )
}
export default App;