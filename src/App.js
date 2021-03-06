import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import './Styles/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Pages/Components/Navbar';
import Footer from './Pages/Components/Footer';



function App() {
    return (
        <div className="app">
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
