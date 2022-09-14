import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'

import TodoList from './TodoList';
import Login from './Login';
import Register from './Register';
import Liste from './components/Liste';
import Ajout from './components/Ajout';
import Modif from './components/Modif';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <TodoList />
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/liste" element={<Liste />} />
            <Route path="/ajout" element={<Ajout />} />
            <Route path="/modif/:id" element={<Modif/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
