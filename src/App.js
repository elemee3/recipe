import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './pages/Header';
import RecipeIndex from './components/RecipeIndex';
import RecipeShow from './components/RecipeShow';
import About from './pages/About'
import Footer from './pages/Footer';
import Oops from './pages/Oops';
import New from './pages/New';
import './App.css';



class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={RecipeIndex} />
                    <Route exact path="/recipes/:id"
                    component={RecipeShow}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/new" component={New} />
                    <Route component={Oops} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
  }
}

export default App;
