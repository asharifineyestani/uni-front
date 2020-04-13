import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Posts from './scenes/Posts'
import './app.scss'

function App() {
    return (
        <Router>
            <Header />
            <div className="app-wrapper">
                <Route path="/posts">
                    <Posts />
                </Route>
            </div>
        </Router>
    );
}

export default App;