import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Routing, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Info from './components/Info';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className="App container-fluid">
        <Header/>
        <Footer/>
    </div>
      
  );
}

export default App;
